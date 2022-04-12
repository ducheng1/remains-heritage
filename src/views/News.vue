<template>
    <div id="news">
        <NewsImg/>
        <el-backtop :bottom="80" :right="100"/>
    </div>
</template>

<script lang="js">
import NewsImg from "../components/NewsImg.vue"

export default {
    name: "news",
    components: {
        NewsImg
    },
}
</script>