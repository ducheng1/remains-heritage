<template>
    <div id="home-menu">
        <el-row :gutter="20">
            <el-col :span="8" class="home-menu-text info">
                <div>
                    遗境 资讯
                </div>
                <div class="home-menu-text more">
                    更多>>>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="home-menu-text media-center">
                    视<br/>听<br/>馆
                </div>
            </el-col>
            <el-col :span="10" class="home-menu-text study">
                <div>
                    学术研究
                </div>
                <div class="home-menu-text more">
                    更多>>>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="13" class="history">
                遗境古画记
            </el-col>
            <el-col :span="10" class="home-menu-text lib">
                图书馆
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="5">
                <div class="home-menu-text collection">
                    <div>
                        遗境 藏品
                    </div>
                    <div class="home-menu-text more">
                        更多>>>
                    </div>
                    <div class="home-menu-text collection-num">
                        实时藏品<br/>
                        {{ collectionNum }}件/套
                    </div>
                    <div class="collection-btn">
                        <el-button type="warning">藏品总目</el-button>
                        <br/>
                        <el-button type="warning">数字文物库</el-button>
                    </div>
                </div>
            </el-col>
            <el-col :span="18" class="home-menu-text collection-img">
                这里放藏品图片
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'HomeMenu',
    data() {
        return {
            collection: [""],
            collectionNum: "146,735",
        }
    }
}
</script>
<style scope>
.home-menu-text {
    color: white;
    font-family: "黑体";
}

.info {
    background: #b82a3a;
    text-align: left;
    padding: 1rem 1rem;
    margin-left: 1rem;
    font-size: 1.2rem;
}

.more {
    float: right;
    font-size: 1rem;
    padding-right: 1rem;
    margin-top: -1rem;
}

.media-center {
    background: linear-gradient(#c39456, #f89e6e);
    padding: 5rem 0.5rem;
    margin-left: 0.5rem;
    font-size: 2.5rem;
}

.study {
    background: linear-gradient(#1c6b90, #175b7a);
    text-align: left;
    padding: 1rem 1rem;
    margin-left: 1rem;
    font-size: 1.2rem;
}

.el-row {
    margin-bottom: 1.25rem;
}

.history {
    background: #9f8552;
    padding: 1rem 1rem;
    margin-left: 1rem;
    font-size: 5rem;
    color: #810805;
    /* font-weight: bold; */
    font-family: "华文行楷";
}

.lib {
    background: #a81123;
    margin-left: 1rem;
    font-size: 3rem;
    padding-top: 2rem;
}

.collection {
    background: #b87e32;
    padding: 1rem 1rem;
    margin-left: 0.5rem;
    text-align: left;
}

.collection-num {
    clear: both;
    text-align: center;
    padding: 2rem;
    font-size: 1.5rem;
    line-height: 150%;
}

.collection-btn {
    clear: both;
    text-align: center;
}

.collection-btn > .el-button {
    margin-bottom: 1rem;
    border-radius: 0;
}

.collection-btn > .el-button:last-child {
    margin-bottom: 0;
}

.collection-img {
    background: #b87e32;
    padding: 1rem 1rem;
    margin-left: 2rem;
    clear: both;
}

</style>