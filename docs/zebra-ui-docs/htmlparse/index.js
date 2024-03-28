function q(v) {
  return '"' + v + '"'
}

function removeDOCTYPE(html) {
  return html
    .replace(/<\?xml.*\?>\n/, '')
    .replace(/<!doctype.*\>\n/, '')
    .replace(/<!DOCTYPE.*\>\n/, '')
}
var startTag =
    /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
  endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
  props =
    /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g

var empty = makeMap(
  'area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr'
)

var block = makeMap(
  'a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video'
)

var inline = makeMap(
  'abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var'
)

var closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr')

var fillAttrs = makeMap(
  'checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected'
)

var special = makeMap('script,style')

function makeMap(str) {
  var obj = {},
    items = str.split(',')
  for (var i = 0; i < items.length; i++) obj[items[i]] = true
  return obj
}

function isEncoded(str) {
  return /%[0-9A-Fa-f]{2}/.test(str)
}

function HTMLParser(html, handler) {
  var index,
    chars,
    match,
    stack = [],
    last = html
  stack.last = function () {
    return this[this.length - 1]
  }

  while (html) {
    chars = true

    if (!stack.last() || !special[stack.last()]) {
      // Comment
      if (html.indexOf('<!--') == 0) {
        index = html.indexOf('-->')

        if (index >= 0) {
          if (handler.comment) handler.comment(html.substring(4, index))
          html = html.substring(index + 3)
          chars = false
        }

        // end tag
      } else if (html.indexOf('</') == 0) {
        match = html.match(endTag)

        if (match) {
          html = html.substring(match[0].length)
          match[0].replace(endTag, parseEndTag)
          chars = false
        }

        // start tag
      } else if (html.indexOf('<') == 0) {
        match = html.match(startTag)

        if (match) {
          html = html.substring(match[0].length)
          match[0].replace(startTag, parseStartTag)
          chars = false
        }
      }

      if (chars) {
        index = html.indexOf('<')

        var text = index < 0 ? html : html.substring(0, index)
        html = index < 0 ? '' : html.substring(index)

        if (handler.chars) handler.chars(text)
      }
    } else {
      html = html.replace(
        new RegExp('([\\s\\S]*?)</' + stack.last() + '[^>]*>'),
        function (all, text) {
          text = text.replace(
            /<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,
            '$1$2'
          )
          if (handler.chars) handler.chars(text)

          return ''
        }
      )

      parseEndTag('', stack.last())
    }

    if (html == last) throw 'Parse Error: ' + html
    last = html
  }

  parseEndTag()

  function parseStartTag(tag, tagName, rest, unary) {
    tagName = tagName.toLowerCase()

    if (block[tagName]) {
      while (stack.last() && inline[stack.last()]) {
        parseEndTag('', stack.last())
      }
    }

    if (closeSelf[tagName] && stack.last() == tagName) {
      parseEndTag('', tagName)
    }

    unary = empty[tagName] || !!unary

    if (!unary) stack.push(tagName)

    if (handler.start) {
      var attrs = []

      rest.replace(props, function (match, name) {
        var value = arguments[2]
          ? arguments[2]
          : arguments[3]
            ? arguments[3]
            : arguments[4]
              ? arguments[4]
              : fillAttrs[name]
                ? name
                : ''

        attrs.push({
          name: name,
          value: value,
          escaped: value.replace(/(^|[^\\])"/g, '$1\\"') //"
        })
      })

      if (handler.start) handler.start(tagName, attrs, unary)
    }
  }

  function parseEndTag(tag, tagName) {
    if (!tagName) var pos = 0
    else
      for (var pos = stack.length - 1; pos >= 0; pos--)
        if (stack[pos] == tagName) break

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--)
        if (handler.end) handler.end(stack[i])

      // Remove the open elements from the stack
      stack.length = pos
    }
  }
}

function debug() {
  // console.log.apply(console, arguments)
}

export function json2html(json) {
  var empty = [
    'area',
    'base',
    'basefont',
    'br',
    'col',
    'frame',
    'hr',
    'img',
    'input',
    'isindex',
    'link',
    'meta',
    'param',
    'embed'
  ]

  var children = ''
  if (json.children) {
    children = json.children
      .map(function (c) {
        return json2html(c)
      })
      .join('')
  }

  var props = ''
  if (json.props) {
    props = Object.keys(json.props)
      .map(function (key) {
        var value = json.props[key]
        if (Array.isArray(value)) value = value.join(' ')

        // 对code里的双引号做处理
        if (key == 'code') {
          value = value.replace(/"/g, '&quot;')
        }

        return key + '=' + q(value)
      })
      .join(' ')
    if (props !== '') props = ' ' + props
  }

  if (json.type === 'element') {
    var tag = json.tag
    if (empty.indexOf(tag) > -1) {
      // empty element
      return '<' + json.tag + props + '/>'
    }

    // non empty element
    var open = '<' + json.tag + props + '>'
    var close = '</' + json.tag + '>'
    return open + children + close
  }

  if (json.type === 'text') {
    // console.log(
    //   json.value,
    //   json.value.includes('<') || json.value.includes('>')
    // )
    // if (json.value == '<' || json.value == '>' || json.value == '</') {
    if (json.value.includes('<') || json.value.includes('>')) {
      json.value = encodeURIComponent(json.value)
      // json.value = "'" + json.value + "'"
    }
    return json.value
  }

  if (json.type === 'comment') {
    return '<!--' + json.value + '-->'
  }

  if (json.type === 'root') {
    return children
  }
}

export function html2json(html) {
  html = removeDOCTYPE(html)
  var bufArray = []
  var results = {
    type: 'root',
    children: []
  }
  HTMLParser(html, {
    start: function (tag, attrs, unary) {
      debug(tag, attrs, unary)
      // node for this element
      var node = {
        type: 'element',
        tag: tag
      }
      if (attrs.length !== 0) {
        node.props = attrs.reduce(function (pre, props) {
          var name = props.name
          var value = props.value

          // has multi attibutes
          // make it array of attribute
          // if (value.match(/ /)) {
          //   value = value.split(' ')
          // }

          // if props already exists
          // merge it
          if (pre[name]) {
            if (Array.isArray(pre[name])) {
              // already array, push to last
              pre[name].push(value)
            } else {
              // single value, make it array
              pre[name] = [pre[name], value]
            }
          } else {
            // not exist, put it
            pre[name] = value
          }

          return pre
        }, {})
      }
      if (unary) {
        // if this tag dosen't have end tag
        // like <img src="hoge.png"/>
        // add to parents
        var parent = bufArray[0] || results
        if (parent.children === undefined) {
          parent.children = []
        }
        parent.children.push(node)
      } else {
        bufArray.unshift(node)
      }
    },
    end: function (tag) {
      debug(tag)
      // merge into parent tag
      var node = bufArray.shift()
      if (node.tag !== tag) console.error('invalid state: mismatch end tag')

      if (bufArray.length === 0) {
        results.children.push(node)
      } else {
        var parent = bufArray[0]
        if (parent.children === undefined) {
          parent.children = []
        }
        parent.children.push(node)
      }
    },
    chars: function (text) {
      debug(text)
      var node = {
        type: 'text',
        value: isEncoded(text) ? decodeURIComponent(text) : text
      }
      if (bufArray.length === 0) {
        results.children.push(node)
      } else {
        var parent = bufArray[0]
        if (parent.children === undefined) {
          parent.children = []
        }
        parent.children.push(node)
      }
    }
    // comment: function (text) {
    //   debug(text)
    //   var node = {
    //     type: 'comment',
    //     value: text
    //   }
    //   var parent = bufArray[0]
    //   if (parent.children === undefined) {
    //     parent.children = []
    //   }
    //   parent.children.push(node)
    // }
  })
  return results
}

export function markdownCardWrapper(htmlCode) {
  const group = htmlCode
    ?.replace(/<h3/g, ':::<h3')
    .replace(/<h2/g, ':::<h2')
    .split(':::')

  return group
    .map((fragment) => {
      if (fragment.indexOf('<h3') !== -1) {
        return `<div class="zebra-doc-card">${fragment}</div>`
      }

      return fragment
    })
    .join('')
}
