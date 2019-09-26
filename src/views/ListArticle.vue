<template>
        <el-table :data="articles">
            <el-table-column prop="title" label="标题" width="100"></el-table-column>
            <el-table-column prop="body" label="内容" width="160"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.row._id)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
</template>



<script>

    export default {
        data() {
            return {
                articles: []
            }
        },
        created() {
           this.fetch()
        },
        methods: {
            fetch() {
                this.$http.get('/api/articles').then(res => {
                    this.articles = res.data
                })
            },

            handleEdit(id) {
                this.$router.push(`/articles/${id}/edit`)
            },
            handleDelete(id) {
                this.$http.delete(`/api/article/${id}`).then(res => {
                    this.$message({
                        message: "文章删除成功",
                        type: "success"
                    })
                    this.fetch()
                })

            },
        }
    }
</script>
