import client from '~/plugins/contentful'

export const state = () => ({
  categories: []
})

export const getters = {
}
export const mutations = {
  setCategories (state, payload) {
    state.categories = payload
    console.log(state.categories)
  }

}
export const actions = {
  async getCategories ({ commit }) {
    await client.getEntries({
      content_type: 'category',
      order: 'fields.sort'
    }).then(res =>
      commit('setCategories', res.items)
    ).catch(console.error)
  }

}
