<template>
  <div id="docsearch" />
</template>

<script>
import docsearch from '@docsearch/js'

export default {
  name: 'ZebraDocSearch',

  props: {
    lang: String
  },

  computed: {
    placeholder() {
      return 'Search...'
    }
  },
  created() {},
  mounted() {
    console.log('mounted', this.lang)
    docsearch({
      appId: '8YBQVNRJ85',
      apiKey: '16696225f41ab9237e5de80f51ec4dba',
      indexName: 'zebraui',
      container: '#docsearch',
      searchParameters: {
        facetFilters: [`language:${this.lang == 'zh' ? '' : 'en'}`]
      }
    })
  }
}
</script>

<style lang="scss">
@import '@docsearch/css';

#docsearch .DocSearch {
  width: 300px;
  border-radius: 6px;
  margin-left: 50px;
  background-color: var(--zebra-doc-background-2);
  color: var(--zebra-doc-text-color-4);
}

.DocSearch-Button .DocSearch-Search-Icon {
  color: var(--zebra-doc-text-color-2);
}

.DocSearch-Screen-Icon {
  display: flex;
  justify-content: center;
}
</style>
