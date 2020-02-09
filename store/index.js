import defaultEyeCatch from '~/assets/images/defaultEyeCatch.jpeg'
import client from '~/plugins/contentful'

export const state = () => ({
  categories: []
})

export const getters = {
  SetEyecatch: () => (post) => {
    if (!!post.fields.image && !!post.fields.image.fields) { return { url: `https:${post.fields.image.fields.file.url}`, title: post.fields.image.fields.title } } else { return { url: defaultEyeCatch, title: 'defaultImage' } }
  }
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
