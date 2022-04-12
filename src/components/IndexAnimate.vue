<template>
	<div id="index-animate">
		<!-- 背景 -->
		<img class="background" src="../assets/index-animate/background.png"/>
		<!-- 太阳 -->
		<img class="sun" src="../assets/index-animate/sun.png"/>
		<!-- 船 -->
		<img class="boat" src="../assets/index-animate/boat.png"/>
		<!-- 山 -->
		<img class="mount1" src="../assets/index-animate/mountain1.png"/>
		<img class="mount2" src="../assets/index-animate/mountain2.png"/>
		<img class="mount3" src="../assets/index-animate/mountain3.png"/>
		<img class="mount4" src="../assets/index-animate/mountain4.png"/>
		<!-- 左云 -->
		<img class="cloud1" src="../assets/index-animate/cloud1.png"/>
		<!-- 右云 -->
		<img class="cloud2" src="../assets/index-animate/cloud2.png"/>
	</div>
</template>
<script>
export default {
	name: "IndexAnimate",
};
</script>
<style scoped>
.background {
	position: relative;
}

/* 船动画 */

.boat {
	position: absolute;
	margin-left: -45rem;
	margin-top: 36rem;
}

@keyframes boatAnimate {
	from {
	}

	to {
		transform: translate(-110%, -10%);
		opacity: 0.8;
	}
}

.boat:hover {
	animation: boatAnimate 2s;
}

/* 太阳动画 */

.sun {
	position: absolute;
	margin-left: -30rem;
	margin-top: 10rem;
	opacity: 0.6;
}

@keyframes sunAnimate {
	from {
	}

	to {
		transform: translateY(-150%);
		opacity: 1;
	}
}

.sun:hover {
	animation: sunAnimate 3s;
}

/* 山动画 */
/* 上移 */

@keyframes mountUpAnimate {
	from {
	}

	to {
		transform: translateY(-10%);
		opacity: 0.8;
	}
}

.mount1 {
	position: absolute;
	margin-top: 20rem;
	margin-left: -60rem;
}

.mount3 {
	position: absolute;
	margin-top: 18rem;
	margin-left: -36rem;
}

.mount1:hover,
.mount3:hover {
	animation: mountUpAnimate 2s;
}

/* 下移 */

@keyframes mountDownAnimate {
	from {
	}

	to {
		transform: translateY(10%);
		opacity: 0.8;
	}
}


.mount2 {
	position: absolute;
	margin-top: 16rem;
	margin-left: -48rem;
}

.mount4 {
	position: absolute;
	margin-top: 15rem;
	margin-left: -25rem;
}

.mount2:hover,
.mount4:hover {
	animation: mountDownAnimate 2s;
}

/* 云动画 */
/* 左移 */
.cloud1 {
	position: absolute;
	margin-top: 30rem;
	margin-left: -25rem;
}

@keyframes cloudLeftAnimate {
	from {
	}

	to {
		transform: translateX(-20%);
		opacity: 0.8;
	}
}

.cloud1:hover {
	animation: cloudLeftAnimate 3s;
}

/* 右移 */

.cloud2 {
	position: absolute;
	margin-top: 32rem;
	margin-left: -16rem;
}

@keyframes cloudRightAnimate {
	from {
	}

	to {
		transform: translateX(20%);
		opacity: 0.8;
	}
}

.cloud2:hover {
	animation: cloudRightAnimate 3s;
}
</style>