<template>
    <div class="display">
        <el-row>
            <div class="dropdownList">
                <!-- 分类 -->
                <el-dropdown class="sortDropdown">
                    <el-button type="warning">分类 ▼</el-button>
                    <template #dropdown>
                        <el-dropdown-menu v-for="(s, index) in sortStr" :key="index">
                            <el-dropdown-item>{{ s }}</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

                <!-- 年代 -->
                <el-dropdown class="ageDropDown">
                    <el-button type="warning">年代 ▼</el-button>
                    <template #dropdown>
                        <el-dropdown-menu v-for="(s, index) in ageStr" :key="index">
                            <el-dropdown-item>{{ s }}</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </el-row>
        <el-row>
            此处显示内容
        </el-row>
    </div>
</template>

<style scoped>
.el-row {
    margin-top: 2rem;
}

.sortDropdown {
    margin-right: 1rem;
}

.dropdownList {
    margin-bottom: 2rem;
}
</style>

<script>
export default {
    name: "display",
    data() {
        return {
            sortStr: ["绘画", "书法", "器具", "雕塑", "织绣", "其他"],
            ageStr: ["夏商周", "春秋战国", "秦汉", "三国两晋", "南北朝", "隋唐五代国", "宋金", "元明清", "近代", "现代"],
        };
    },

};
</script>