<template>
    <!-- 导航图片 -->
    <div class="imgs">
		<span v-for="(img, index) in imgs" :key="index" class="img">
			<el-image :src="img.src"></el-image>
		</span>
    </div>
    <!-- 视频导航图片 -->
    <div :v-bind="video" class="video">
		<span class="text">
			<h1>视频 共{{ video.num }}个</h1>
		</span>
        <hr/>
        <div v-for="(v, index) in video.parts" :key="index" class="video-parts">
			<span class="text">
				<h2>{{ v.name }}</h2>
			</span>
            <span v-for="(img, index) in v.img" :key="index" class="video-img">
				<el-image :src="img.src"></el-image>
			</span>
        </div>
    </div>
</template>

<style scoped="scoped">
.img {
    margin: 0 0.5rem;
}

.text {
    text-align: left;
    padding-left: 2rem;
}

.video-img {
    margin: 0 2rem;
}
</style>

<script>
export default {
    name: "NewsImg",
    data() {
        return {
            imgs: [{
                src: require("../assets/news/parts/fame-pulpit.png"),
            },
                {
                    src: require("../assets/news/parts/explain.png"),
                },
                {
                    src: require("../assets/news/parts/untitled.png"),
                },
                // {
                //     src: require("../assets/news/parts/hot.png")
                // },
                {
                    src: require("../assets/news/parts/live.png"),
                },
            ],
            video: {
                num: "367",
                parts: [{
                    name: "讲坛",
                    img: [{
                        src: require("../assets/news/pulpit/1.png"),
                    },
                        {
                            src: require("../assets/news/pulpit/2.png"),
                        },
                        {
                            src: require("../assets/news/pulpit/3.png"),
                        },
                    ],
                },
                    {
                        name: "云看展",
                        img: [{
                            src: require("../assets/news/online-show/1.png"),
                        },
                            {
                                src: require("../assets/news/online-show/2.png"),
                            },
                            {
                                src: require("../assets/news/online-show/3.png"),
                            },
                        ],
                    },
                    {
                        name: "直播",
                        img: [{
                            src: require("../assets/news/live/1.png"),
                        },
                            {
                                src: require("../assets/news/live/2.png"),
                            },
                            {
                                src: require("../assets/news/live/3.png"),
                            },
                        ],
                    },
                ],
            },
        };
    },
};
</script>
