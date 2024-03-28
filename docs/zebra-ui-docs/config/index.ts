export default {
  name: 'zebra-ui',
  site: {
    defaultLang: 'zh',
    darkModeClass: 'zebra-theme-dark',
    lightModeClass: 'zebra-theme-light',
    enableVConsole: false,
    versions: [{ label: '1.x', link: 'https://v1.zebraui.com/' }],
    baiduAnalytics: {
      seed: '841f20e6334a41191d899e2cab61bf9f'
    },
    simulator: {
      url: 'http://localhost:5173/#/'
    },
    locales: {
      zh: {
        title: 'zebra-ui',
        subtitle: '基于uniapp，跨多端组件库',
        description: '基于uniapp，使用vue3 + ts + setup 的多端兼容组件库。',
        logo: 'https://assets-1256020106.file.myqcloud.com/zebra-ui/logo.png',
        links: [
          {
            logo: 'h5',
            url: 'https://zebraui.com/h5'
          },
          {
            logo: 'uni',
            url: 'https://ext.dcloud.net.cn/'
          },
          {
            logo: 'github',
            url: 'https://github.com/zebra-ui/zebra-ui'
          },
          {
            logo: 'gitee',
            url: 'https://gitee.com/zebra-ui/zebra-ui'
          }
        ],
        nav: [
          {
            title: '开发指南',
            items: [
              {
                path: 'home',
                title: '介绍'
              },
              {
                path: 'quickstart',
                title: '快速上手'
              },
              {
                path: 'advanced-usage',
                title: '进阶用法'
              },
              {
                path: 'faq',
                title: '常见问题'
              },
              {
                path: 'changedlog',
                title: '更新日志'
              },
              {
                path: 'contribution',
                title: '贡献指南'
              },
              {
                path: 'international',
                title: '国际化'
              }
            ]
          },
          {
            title: '基础组件',
            items: [
              {
                path: 'button',
                title: 'Button 按钮'
              },
              {
                path: 'cell',
                title: 'Cell 单元格'
              },
              {
                path: 'config-provider',
                title: 'ConfigProvider 全局配置'
              },
              {
                path: 'icon',
                title: 'Icon 图标'
              },
              {
                path: 'image',
                title: 'Image 图片'
              },
              {
                path: 'layout',
                title: 'Layout 布局'
              },
              {
                path: 'popup',
                title: 'Popup 弹出层'
              },
              {
                path: 'style',
                title: 'Style 内置样式'
              },
              {
                path: 'transition',
                title: 'Transition 动画'
              },
              {
                path: 'toast',
                title: 'Toast 轻提示'
              }
            ]
          },
          {
            title: '表单组件',
            items: [
              {
                path: 'calendar',
                title: 'Calendar 日历'
              },
              {
                path: 'cascader',
                title: 'Cascader 级联选择'
              },
              {
                path: 'checkbox',
                title: 'Checkbox 复选框'
              },
              {
                path: 'date-picker',
                title: 'DatePicker 日期选择'
              },
              {
                path: 'field',
                title: 'Field 输入框'
              },
              {
                path: 'form',
                title: 'Form 表单'
              },
              {
                path: 'number-keyboard',
                title: 'NumberKeyboard 数字键盘'
              },
              {
                path: 'password-input',
                title: 'PasswordInput 密码输入框'
              },
              {
                path: 'picker',
                title: 'Picker 选择器'
              },
              {
                path: 'picker-group',
                title: 'PickerGroup 选择器组'
              },
              {
                path: 'radio',
                title: 'Radio 单选框'
              },
              {
                path: 'rate',
                title: 'Rate 评分'
              },
              {
                path: 'search',
                title: 'Search 搜索'
              },
              {
                path: 'slider',
                title: 'Slider 滑块'
              },
              {
                path: 'signature',
                title: 'Signature 签名'
              },
              {
                path: 'stepper',
                title: 'Stepper 步进器'
              },
              {
                path: 'switch',
                title: 'Switch 开关'
              },
              {
                path: 'time-picker',
                title: 'TimePicker 时间选择'
              },
              {
                path: 'uploader',
                title: 'Uploader 文件上传'
              }
            ]
          },
          {
            title: '反馈组件',
            items: [
              {
                path: 'action-sheet',
                title: 'ActionSheet 动作面板'
              },
              {
                path: 'barrage',
                title: 'Barrage 弹幕'
              },
              {
                path: 'dialog',
                title: 'Dialog 弹出框'
              },
              {
                path: 'dropdown-menu',
                title: 'DropdownMenu 下拉菜单'
              },
              {
                path: 'floating-panel',
                title: 'FloatingPanel 浮动面板'
              },
              {
                path: 'floating-bubble',
                title: 'FloatingBubble 浮动气泡'
              },
              {
                path: 'loading',
                title: 'Loading 加载'
              },
              {
                path: 'notify',
                title: 'Notify 消息通知'
              },
              {
                path: 'overlay',
                title: 'Overlay 遮罩层'
              },
              {
                path: 'pull-refresh',
                title: 'PullRefresh 下拉刷新'
              },
              {
                path: 'share-sheet',
                title: 'ShareSheet 分享面板'
              },
              {
                path: 'swipe-cell',
                title: 'SwipeCell 滑动单元格'
              }
            ]
          },
          {
            title: '展示组件',
            items: [
              {
                path: 'badge',
                title: 'Badge 徽标'
              },
              {
                path: 'circle',
                title: 'Circle 环形进度条'
              },
              {
                path: 'collapse',
                title: 'Collapse 折叠面板'
              },
              {
                path: 'count-down',
                title: 'CountDown 倒计时'
              },
              {
                path: 'divider',
                title: 'Divider 分割线'
              },
              {
                path: 'empty',
                title: 'Empty 空状态'
              },
              {
                path: 'highlight',
                title: 'Highlight 高亮文本'
              },
              {
                path: 'list',
                title: 'List 列表'
              },
              {
                path: 'notice-bar',
                title: 'NoticeBar 通知栏'
              },
              {
                path: 'popover',
                title: 'Popover 气泡弹出框'
              },
              {
                path: 'progress',
                title: 'Progress 进度条'
              },
              {
                path: 'rolling-text',
                title: 'RollingText 翻滚文本'
              },
              {
                path: 'skeleton',
                title: 'Skeleton 骨架屏'
              },
              {
                path: 'steps',
                title: 'Steps 步骤条'
              },
              {
                path: 'sticky',
                title: 'Sticky 粘性布局'
              },
              {
                path: 'swipe',
                title: 'Swipe 轮播'
              },
              {
                path: 'tag',
                title: 'Tag 标签'
              },
              {
                path: 'text-ellipsis',
                title: 'TextEllipsis 文本省略'
              },
              {
                path: 'watermark',
                title: 'Watermark 水印'
              }
            ]
          },
          {
            title: '导航组件',
            items: [
              {
                path: 'grid',
                title: 'Grid 宫格'
              },
              {
                path: 'nav-bar',
                title: 'NavBar 导航栏'
              },
              {
                path: 'tab',
                title: 'Tab 标签页'
              },
              {
                path: 'tabbar',
                title: 'Tabbar 标签栏'
              }
            ]
          }
        ]
      },
      en: {
        title: 'zebra-ui',
        subtitle: 'A cross-platform component library based on uniapp',
        description:
          'A cross-platform compatible component library based on uniapp, using vue3 + ts + setup.',
        logo: 'https://assets-1256020106.file.myqcloud.com/zebra-ui/logo.png',
        links: [
          {
            logo: 'h5',
            url: 'https://zebraui.com/h5'
          },
          {
            logo: 'uni',
            url: 'https://ext.dcloud.net.cn/'
          },
          {
            logo: 'github',
            url: 'https://github.com/zebra-ui/zebra-ui'
          },
          {
            logo: 'gitee',
            url: 'https://gitee.com/zebra-ui/zebra-ui'
          }
        ],
        nav: [
          {
            title: 'Essentials',
            items: [
              {
                path: 'home',
                title: 'Introduction'
              },
              {
                path: 'quickstart',
                title: 'Quickstart'
              },
              {
                path: 'advanced-usage',
                title: 'Advanced Usage'
              },
              {
                path: 'faq',
                title: 'FAQ'
              },
              {
                path: 'changedlog',
                title: 'Changelog'
              },
              {
                path: 'contribution',
                title: 'Contribution Guide'
              },
              {
                path: 'design',
                title: 'Design Resources'
              },
              {
                path: 'international',
                title: 'Internationalization'
              }
            ]
          },
          {
            title: 'Basic Components',
            items: [
              {
                path: 'button',
                title: 'Button'
              },
              {
                path: 'cell',
                title: 'Cell'
              },
              {
                path: 'config-provider',
                title: 'ConfigProvider'
              },
              {
                path: 'icon',
                title: 'Icon'
              },
              {
                path: 'image',
                title: 'Image'
              },
              {
                path: 'layout',
                title: 'Layout'
              },
              {
                path: 'popup',
                title: 'Popup'
              },
              {
                path: 'style',
                title: 'Built-in style'
              },
              {
                path: 'transition',
                title: 'Transition'
              },
              {
                path: 'toast',
                title: 'Toast'
              }
            ]
          },
          {
            title: 'Form Components',
            items: [
              {
                path: 'calendar',
                title: 'Calendar'
              },
              {
                path: 'cascader',
                title: 'Cascader'
              },
              {
                path: 'checkbox',
                title: 'Checkbox'
              },
              {
                path: 'date-picker',
                title: 'DatePicker'
              },
              {
                path: 'field',
                title: 'Field'
              },
              {
                path: 'form',
                title: 'Form'
              },
              {
                path: 'number-keyboard',
                title: 'NumberKeyboard'
              },
              {
                path: 'password-input',
                title: 'PasswordInput'
              },
              {
                path: 'picker',
                title: 'Picker'
              },
              {
                path: 'picker-group',
                title: 'PickerGroup'
              },
              {
                path: 'radio',
                title: 'Radio'
              },
              {
                path: 'rate',
                title: 'Rate'
              },
              {
                path: 'search',
                title: 'Search'
              },
              {
                path: 'slider',
                title: 'Slider'
              },
              {
                path: 'signature',
                title: 'Signature'
              },
              {
                path: 'stepper',
                title: 'Stepper'
              },
              {
                path: 'switch',
                title: 'Switch'
              },
              {
                path: 'time-picker',
                title: 'TimePicker'
              },
              {
                path: 'uploader',
                title: 'Uploader'
              }
            ]
          },
          {
            title: 'Action Components',
            items: [
              {
                path: 'action-sheet',
                title: 'ActionSheet'
              },
              {
                path: 'barrage',
                title: 'Barrage'
              },
              {
                path: 'dialog',
                title: 'Dialog'
              },
              {
                path: 'dropdown-menu',
                title: 'DropdownMenu'
              },
              {
                path: 'floating-panel',
                title: 'FloatingPanel'
              },
              {
                path: 'floating-bubble',
                title: 'FloatingBubble'
              },
              {
                path: 'loading',
                title: 'Loading'
              },
              {
                path: 'notify',
                title: 'Notify'
              },
              {
                path: 'overlay',
                title: 'Overlay'
              },
              {
                path: 'pull-refresh',
                title: 'PullRefresh'
              },
              {
                path: 'share-sheet',
                title: 'ShareSheet'
              },
              {
                path: 'swipe-cell',
                title: 'SwipeCell'
              }
            ]
          },
          {
            title: 'Display Components',
            items: [
              {
                path: 'badge',
                title: 'Badge'
              },
              {
                path: 'circle',
                title: 'Circle'
              },
              {
                path: 'collapse',
                title: 'Collapse'
              },
              {
                path: 'count-down',
                title: 'CountDown'
              },
              {
                path: 'divider',
                title: 'Divider'
              },
              {
                path: 'empty',
                title: 'Empty'
              },
              {
                path: 'highlight',
                title: 'Highlight'
              },
              {
                path: 'list',
                title: 'List'
              },
              {
                path: 'notice-bar',
                title: 'NoticeBar'
              },
              {
                path: 'popover',
                title: 'Popover'
              },
              {
                path: 'progress',
                title: 'Progress'
              },
              {
                path: 'rolling-text',
                title: 'RollingText'
              },
              {
                path: 'skeleton',
                title: 'Skeleton'
              },
              {
                path: 'steps',
                title: 'Steps'
              },
              {
                path: 'sticky',
                title: 'Sticky'
              },
              {
                path: 'swipe',
                title: 'Swipe'
              },
              {
                path: 'tag',
                title: 'Tag'
              },
              {
                path: 'text-ellipsis',
                title: 'TextEllipsis'
              },
              {
                path: 'watermark',
                title: 'Watermark'
              }
            ]
          },
          {
            title: 'Navigation Components',
            items: [
              {
                path: 'grid',
                title: 'Grid'
              },
              {
                path: 'nav-bar',
                title: 'NavBar'
              },
              {
                path: 'tab',
                title: 'Tab'
              },
              {
                path: 'tabbar',
                title: 'Tabbar'
              }
            ]
          }
        ]
      }
    }
  }
}
