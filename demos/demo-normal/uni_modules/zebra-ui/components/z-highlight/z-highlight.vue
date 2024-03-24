<template>
  <view :class="bem()">
    <template v-for="(chunk, index) in highlightChunks" :key="index">
      <template v-if="chunk.highlight">
        <text :class="[bem('tag'), highlightClass]" :style="highlightStyle">
          {{ getSourceString(chunk) }}
        </text>
      </template>
      <template v-else>
        <text :style="unhighlightStyle" :class="unhighlightClass">{{
          getSourceString(chunk)
        }}</text>
      </template>
    </template>
  </view>
</template>
<script lang="ts" setup>
import { computed, type PropType } from 'vue'

import {
  createNamespace,
  makeRequiredProp,
  makeStringProp,
  truthProp,
  useComponentName
} from '../../libs/utils'

const [name, bem] = createNamespace('highlight')
useComponentName(name)

const props = defineProps({
  autoEscape: truthProp,
  caseSensitive: Boolean,
  highlightStyle: Object,
  highlightClass: String,
  keywords: makeRequiredProp<PropType<string | string[]>>([String, Array]),
  sourceString: makeStringProp(''),
  unhighlightStyle: Object,
  unhighlightClass: String
})

const highlightChunks = computed(() => {
  const { autoEscape, caseSensitive, keywords, sourceString } = props
  const flags = caseSensitive ? 'g' : 'gi'
  const _keywords = Array.isArray(keywords) ? keywords : [keywords]
  let chunks = _keywords
    .filter((keyword) => keyword)
    .reduce<Array<{ start: number; end: number; highlight: boolean }>>(
      (chunks, keyword) => {
        if (autoEscape) {
          keyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        }

        const regex = new RegExp(keyword, flags)
        let match: any
        // @ts-ignore
        while ((match = regex.exec(sourceString))) {
          const start = match.index
          const end = regex.lastIndex

          if (start >= end) {
            regex.lastIndex++
            continue
          }

          chunks.push({
            start,
            end,
            highlight: true
          })
        }

        return chunks
      },
      []
    )

  chunks = chunks
    .sort((a, b) => a.start - b.start)
    .reduce<typeof chunks>((chunks, currentChunk) => {
      const prevChunk = chunks[chunks.length - 1]

      if (!prevChunk || currentChunk.start > prevChunk.end) {
        const unhighlightStart = prevChunk ? prevChunk.end : 0
        const unhighlightEnd = currentChunk.start

        if (unhighlightStart !== unhighlightEnd) {
          chunks.push({
            start: unhighlightStart,
            end: unhighlightEnd,
            highlight: false
          })
        }

        chunks.push(currentChunk)
      } else {
        prevChunk.end = Math.max(prevChunk.end, currentChunk.end)
      }

      return chunks
    }, [])

  const lastChunk = chunks[chunks.length - 1]
  // @ts-ignore
  if (lastChunk && lastChunk.end < sourceString.length) {
    chunks.push({
      start: lastChunk.end,
      // @ts-ignore
      end: sourceString.length,
      highlight: false
    })
  }

  return chunks
})

const getSourceString = (chunk: any) => {
  // @ts-ignore
  return props.sourceString.slice(chunk.start, chunk.end)
}
</script>
<script lang="ts">
export default {
  name: 'ZHighlight',
  options: {
    virtualHost: true
  }
}
</script>
<style lang="scss" scoped>
.z-highlight {
  &__tag {
    color: var(--z-highlight-tag-color);
  }
}
</style>
