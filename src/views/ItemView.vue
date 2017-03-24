<template>
  <div>
    {{items}}
  </div>
    
</template>

<script>
 
function fetchItems (store) {
  let items = 'items'
  return store.dispatch('FETCH_ITEMS', { items })
}
export default {
  name: 'item-view',
  computed: {
    items () {
      return this.$store.state.items
    }
  },
  preFetch: fetchItems,
  beforeMount () { 
    fetchItems(this.$store)
  }
}
</script>