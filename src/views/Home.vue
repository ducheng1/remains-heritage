<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <IndexAnimate/>
        <HomeMenu/>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import IndexAnimate from '@/components/IndexAnimate.vue'
import HomeMenu from "../components/HomeMenu.vue"

export default {
    name: 'Home',
    components: {
        // HelloWorld,
        IndexAnimate,
        HomeMenu
    }
}
</script>