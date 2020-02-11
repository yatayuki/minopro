<template>
  <v-app>
    <v-img
      src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/49442049_2136301306456649_298560287894667264_o.jpg?_nc_cat=110&_nc_oc=AQm6SjyaXB34cG_zdLx5Rjuk7CQAXyr58Z3aMAGzJl1DIXZB1Of2MDH4kvU0-XyVTEKNOFVRFe6z2rOIb-vMisPO&_nc_ht=scontent-nrt1-1.xx&oh=b49d0781ed640818ae9d70e2c4e43499&oe=5EBAF5BD"
      max-height="250"
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        height="80"
        width="80"
        elevation="6"
        class="mt-5 ml-5"
      />
    </v-img>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      width="350"
      bottom
      temporary
    >
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>箕輪編集室</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn width="300" class="mx-auto my-2">
              箕輪編集室
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              エンジニアチーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              デザインチーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              PRチーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              学生チーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              ライターチーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              メディアチーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              イベントプロデュースチーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              コミュニティデザインチーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              キャリアデザインチーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              神社プロデュースチーム
            </v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>マイプロジェクト</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn width="300" class="mx-auto my-2">
              箕輪編集室
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              エンジニアチーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              デザインチーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              PRチーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              学生チーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              ライターチーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              メディアチーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              イベントプロデュースチーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              コミュニティデザインチーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              キャリアデザインチーム
            </v-btn>
            <v-btn width="300" class="mx-auto my-2">
              神社プロデュースチーム
            </v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>
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
                >
                  <v-card-text>
                    <v-chip
                      :color="categoryColor(post.fields.category)"
                      small
                      dark
                      to="linkTo('categories', post.fields.category)"
                      class="font-weight-bold"
                    >
                      {{ post.fields.category.fields.name }}
                    </v-chip>
                  </v-card-text>
                </v-img>
                <v-row>
                  <v-card-text
                    class="py-1"
                  >
                    <template v-if="post.fields.tags">
                      <v-chip
                        v-for="(tag) in post.fields.tags"
                        :key="tag.sys.id"
                        to="linkTo('tags', tag)"
                        small
                        label
                        outlined
                        class="mx-1 mt-2"
                      >
                        <v-icon
                          left
                          size="18"
                          color="grey"
                        >
                          mdi-label
                        </v-icon>
                        {{ tag.fields.name }}
                      </v-chip>
                    </template>
                  </v-card-text>
                </v-row>
                <v-row>
                  <v-btn
                    @click.stop="dialog = true"
                    color="accent"
                    text
                    class="ml-6 mb-1"
                  >
                    ABOUT
                  </v-btn>
                  <v-spacer />
                  <v-btn
                    :href="post.fields.url"
                    color="accent"
                    text
                    class="mr-6 mb-1"
                  >
                    Jump!
                  </v-btn>
                </v-row>
              </v-card>
              <v-dialog
                v-model="dialog"
                max-width="700"
              >
                <v-card>
                  <v-img
                    :src="post.fields.image.fields.file.url"
                    :alt="post.fields.image.fields.title"
                    :aspect-ratio="16/9"
                  />
                  <v-card-text>
                    {{ post.fields.body }}
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      to="post.fields.url"
                      text
                      color="primary"
                      class="mr-3"
                    >
                      こちら！
                    </v-btn>
                    <v-spacer />
                    <v-btn
                      @click="dialog = false"
                      color="green darken-1"
                      text
                      class="mr-3"
                    >
                      閉じる
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
          <div v-else class="text-center">
            投稿された記事はありません。
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import client from '~/plugins/contentful'
export default {
  data () {
    return {
      dialog: false,
      drawer: false,
      group: null
    }
  },
  computed: {
    linkTo: () => (obj) => {
      return { name: 'posts-slug', params: { slug: obj.fields.slug } }
    },
    categoryColor () {
      return (category) => {
        switch (category.fields.name) {
          case 'イベント・ミーティング': return '#C73A31'
          case '自己紹介・雑談等': return '#236244'
          case 'お知らせ': return 'primary'
          case '作品制作・プロジェクト': return '#0e2b3c'
          case '講座・勉強会': return '#aa00aa'
          case '質問・アンケート': return '#aaaa00'
          default: return '#777'
        }
      }
    }
  },
  watch: {
    group () {
      this.drawer = false
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
