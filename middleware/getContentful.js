export default async ({ store }) => {
  if (!store.state.categories.length) { await store.dispatch('getCategories') }
}
