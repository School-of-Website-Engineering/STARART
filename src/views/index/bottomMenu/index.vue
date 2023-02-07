<template>
	<div class="bottomMenuBox">
		<van-row type="flex" justify="space-around" class="bottomMenu">
			<van-tag color="#7232dd" class="menu-head bubbleDialogue"
			>文本输出
			</van-tag>
			<van-col span="12" class="textOutput">
				
				
				<bubble-dialog
					class="bubbleDialog"
					:content="`你拾取了一个东西`"
					:is-left="true"
					:avatar-img="require('@/assets/logo.png')"
				/>
				<bubble-dialog
					class="bubbleDialog"
					:content="`你拾取了大便`"
					:is-left="true"
					:avatar-img="require('@/assets/logo.png')"
				/>
				<bubble-dialog
					class="bubbleDialog"
					:content="`你拾取了馒头`"
					:is-left="true"
					:avatar-img="require('@/assets/logo.png')"
				/>
				<bubble-dialog
					class="bubbleDialog"
					:content="`你拾取了一个木头`"
					:is-left="true"
					:avatar-img="require('@/assets/logo.png')"
				/>
				<bubble-dialog
					class="bubbleDialog"
					:content="`你拾取了只因`"
					:is-left="true"
					:avatar-img="require('@/assets/logo.png')"
				/>
			</van-col>
			<van-col span="12" class="more">
				<van-tag color="#7232dd" class="menu-head">更多</van-tag>
				<div class="bagBox" @click="bagShow">
					<img
						class="bag"
						:src="
							bagTab
								? require('@/assets/bag.png')
								: require('@/assets/bagClick.png')
						"
						alt=""
					/>
				</div>
				
				<van-button
					@click="archive"
					class="archive"
					:loading="this.archiveLoading"
					type="info"
					loading-text="加载中..."
				>
					读取存档
				</van-button>
				<van-button
					@click="IllustratedBook"
					class="World IllustratedBook"
					color="#7232dd"
				>世界图鉴
				</van-button>
				<van-button
					@click="exploreNotes"
					class="exploreNotes"
					type="primary"
				>探索笔记
				</van-button>
				<van-button @click="aboutUs" class="aboutUs" type="warning"
				>关于我们
				</van-button>
			</van-col>
		</van-row>
		<van-row type="flex" justify="space-around" class="bottomLine">
			<van-tag class="time-list" plain type="primary">
				<span>第1天</span>
				<span>{{ this.worldTime }}</span>
			</van-tag>
			<van-tag class="time-list" plain type="primary">
				<span>当前时间:</span>
				<span>清晨时分</span>
			</van-tag>
			<van-button
				@click="pauseBtn"
				:icon="this.pause ? 'pause' : 'play'"
				class="pause"
				type="danger"
			>暂停游戏
			</van-button>
		</van-row>
	</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import bubbleDialog from "@/views/bubbleDialog/index.vue";

export default {
	name      : "bottomMenu",
	components: {bubbleDialog},
	data() {
		return {
			pause         : "false",
			archiveLoading: false,
			bagTab        : "false"
		};
	},
	created() {
		// 获取timer的游戏世界时间(changeTime)
		this.changeTime();
	},
	computed: {...mapGetters("timer", ["worldTime"])},
	methods : {
		...mapActions("timer", ["changeTime"]),
		pauseBtn() {
			this.pause = !this.pause;
		},
		archive() {
			this.archiveLoading = true;
			setTimeout(() => {
				this.archiveLoading = false;
			}, 2000);
		},
		IllustratedBook() {
		},
		exploreNotes() {
		},
		aboutUs() {
		},
		bagShow() {
			this.bagTab = !this.bagTab;
			setTimeout(function() {
				this.bagTab = !this.bagTab;
			}, 1200);
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";

.bottomLine {
	width: $body-width;
	height: 6vh;
	margin: 0 auto 0;
	border: $border solid rgb(114, 50, 221);
	
	.time-list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 128px;
		height: 45px;
		margin: auto;
		text-align: center;
		border-radius: 5px;
		
		&:nth-child(2) {
			width: 210px;
		}
	}
	
	.pause {
		width: 191px;
		height: 40px;
		margin: auto;
		display: flex;
		font-size: 10px;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
	}
}

.bottomMenu {
	border: $border solid #7232dd;
	width: $body-width;
	height: $bottomMenu-height;
	border-bottom: none;
	display: flex;
	justify-content: space-around;
	margin: 6px auto 0;
	position: relative;
	
	.bagBox {
		width: 100px;
		height: 100px;
		border: 2px solid #7232dd;
		border-radius: 50%;
		position: absolute;
		z-index: 2;
		top: 50%;
		transform: translateY(-50%);
		
		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100px;
			height: 100px;
			z-index: 2;
		}
	}
	
	.textOutput {
		height: $Menu-height;
		border: $border solid #7232dd;
		border-radius: $border-radius;
		position: relative;
		width: 43%;
		margin-top: 15px;
		overflow: auto;
	}
	
	.more {
		height: $Menu-height;
		border: $border solid #7232dd;
		border-radius: 5px;
		position: relative;
		width: 54%;
		margin-top: 15px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-around;
		
		.archive,
		.IllustratedBook,
		.exploreNotes,
		.aboutUs {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-around;
			flex-direction: column-reverse;
			width: 150px;
			height: 55px;
			font-size: 10px;
			padding: 0;
		}
	}
	
	.menu-head {
		width: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		border: $border solid #7232dd;
		border-radius: 5px;
		position: absolute;
		top: -7px;
		left: 6px;
		z-index: 99;
	}
	
	.bubbleDialogue {
		width: 100px;
		top:8px;
	}
}
</style>
