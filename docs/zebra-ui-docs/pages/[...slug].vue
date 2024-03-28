<template>
  <main>
    <div class="zebra-doc-markdown-body">
      <ContentDoc v-slot="{ doc }">
        <!-- <div>
          {{ formatDoc(doc) }}
        </div> -->
        <ContentRenderer :value="formatDoc(doc)" />
      </ContentDoc>
    </div>
  </main>
</template>

<script setup>
import { toRaw } from '@vue/reactivity'
import { json2html, html2json, markdownCardWrapper } from '../htmlparse'

const formatDoc = (value) => {
  const toc = toRaw(value.body).toc
  const data = JSON.parse(JSON.stringify(toRaw(value)))
  if (data) {
    const htmlString = json2html(data.body)
    const markdownCard = markdownCardWrapper(htmlString)
    const htmlJson = html2json(markdownCard)
    htmlJson.toc = toc
    data.body = htmlJson
  }
  return data
}
</script>
