<template>
<el-form ref="form" :model="article" label-width="100px">
    <el-form-item label="文章标题">
        <el-input v-model="article.title"></el-input>
    </el-form-item>

    <el-form-item label="文章内容">
        <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button @click="saveArticle" type="primary" native-type="submit">立即保存</el-button>
        <el-button @click="back">取消</el-button>
    </el-form-item>
</el-form>
</template>

<script>
    export default {
        data() {
            return {
                article: {
                    title: '',
                    body: '',
                }
            }
        },
        created() {
            this.fetch()
        },

        methods: {
            fetch() {
                this.$http.get(`/api/article/${this.$route.params.id}`).then(res => {
                    this.article = res.data
                })
            },
            saveArticle() {
                this.$http.put(`/api/article/${this.$route.params.id}`, this.article).then(res => {
                    this.$message({
                        message: "文章更新成功",
                        type: "success"
                    })
                    this.$router.push('/articles/index')
                }).catch(res => {
                    console.log(res)
                })
            },
            back() {
                this.$router.go(-1)
            }
        },
    }
</script>
