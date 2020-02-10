<template>
  <v-container fluid>
    <v-row
      justify="center"
    >
      <v-col
        cols="12"
        sm="11"
        md="10"
        xl="8"
      >
        <v-row v-if="posts.length">
          <v-col
            v-for="(post, i) in posts"
            :key="i"
            cols="12"
            sm="6"
            lg="4"
            xl="3"
          >
            <v-card
              max-width="400"
              class="mx-auto"
            >
              <v-img
                :src="post.fields.image.fields.file.url"
                :alt="post.fields.image.fields.title"
                :aspect-ratio="16/9"
                max-height="200"
                class="white--text"
              >
                <v-card-text>
                  <v-chip
                    :color="categoryColor(post.fields.category)"
                    small
                    dark
                    to="#"
                    class="font-weight-bold"
                  >
                    {{ post.fields.category.fields.name }}
                  </v-chip>
                </v-card-text>
              </v-img>
              <v-card-text>
                {{ post.fields.publishdate }}
              </v-card-text>

              <v-list-item three-line style="min-height: unset;">
                <v-list-item-subtitle>
                  {{ post.fields.body }}
                </v-list-item-subtitle>
              </v-list-item>

              <v-card-actions>
                <v-spacer />
                <v-btn
                  text
                  color="primary"
                >
                  この記事をみる
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <div v-else class="text-center">
          投稿された記事はありません。
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  computed: {
    categoryColor () {
      return (category) => {
        switch (category.fields.name) {
          case 'イベント、ミーティング': return '#C73A31'
          case '自己紹介、雑談等': return '#236244'
          case 'お知らせ': return 'primary'
          default: return 'grey darken-3'
        }
      }
    }
  },
  async asyncData ({ env }) {
    let posts = []
    await client.getEntries({
      content_type: env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.publishdate'
    }).then(res => (posts = res.items)).catch(console.error)
    return { posts }
  }
}
</script>
