<template>
	<div class="bottomMenuBox">
		<van-row type="flex" justify="space-around" class="bottomMenu">
			<van-tag color="#7232dd" class="menu-head bubbleDialogue"
				>文本输出
			</van-tag>
			<!--对话框-->
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
				<bubble-dialog
					class="bubbleDialog"
					:content="`你拾取了蛋蛋`"
					:is-left="true"
					:avatar-img="require('@/assets/logo.png')"
				/>
				<bubble-dialog
					class="bubbleDialog"
					:content="`你拾取了邶贝`"
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
					@click="showExploreNotes"
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
		<van-popup
			class="bagPopupBox"
			v-model="bagTab"
			position="bottom"
			:style="{ height: '40%' }"
		>
			<van-tag class="bagBoxBar" round size="large" type="primary"
				><span>背</span><span>包</span>
				<van-icon
					class="bagEdit"
					@click="bagEditing"
					:name="!bagEdit ? 'delete' : 'checked'"
				/>
			</van-tag>
			<channel-edit :bag-edit="bagEdit"></channel-edit>
		</van-popup>

		<van-popup
			class="bagPopupBox"
			v-model="exploreNotes"
			position="bottom"
			:style="{ height: '40%' }"
		>
			<van-tag class="bagBoxBar" round size="large" type="primary">
				<van-icon class="mapDescription" name="description" />
				<span>探</span><span>索</span><span>笔</span><span>记</span>
				<van-icon class="mapDescription" name="description" />
			</van-tag>
			<exploreNotes :bag-edit="bagEdit"></exploreNotes>
		</van-popup>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import bubbleDialog from "@/views/bubbleDialog/index.vue";
import channelEdit from "@/views/index/components/channel-edit.vue";
import exploreNotes from "@/views/index/components/exploreNotes.vue";

export default {
	name      : "bottomMenu",
	components: { bubbleDialog, channelEdit, exploreNotes },
	data() {
		return {
			pause         : false,
			archiveLoading: false,
			bagTab        : false,
			bagEdit       : false,
			exploreNotes  : false
		};
	},
	created() {
		// 获取timer的游戏世界时间(changeTime)
		this.changeTime();
	},
	computed: {
		// 获取timer的游戏世界时间(worldTime)
		...mapGetters("timer", ["worldTime"])
	},
	methods: {
		// 获取timer的游戏世界时间(changeTime)
		...mapActions("timer", ["changeTime"]),
		// 暂停游戏
		pauseBtn() {
			this.pause = !this.pause;
		},
		// 读取存档
		archive() {
			this.archiveLoading = true;
			setTimeout(() => {
				this.archiveLoading = false;
			}, 2000);
		},
		IllustratedBook() {},
		aboutUs() {},
		// 背包显示
		bagShow() {
			this.bagTab = !this.bagTab;
		},
		// 背包编辑
		bagEditing() {
			this.bagEdit = !this.bagEdit;
		},
		// 探索笔记
		showExploreNotes() {
			this.exploreNotes = !this.exploreNotes;
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_media.scss";
@import "@/assets/scss/_color.scss";

.bagPopupBox {
	.bagBoxBar {
		position: fixed;
		z-index: 2;
		width: 95.82%;
		height: 60px;
		border-radius: unset;
		align-items: center;
		justify-content: space-evenly;
		font-size: 16px;

		.mapDescription {
			font-size: 20px;
		}

		.bagEdit {
			position: absolute;
			right: 60px;
			font-size: 18px;
		}
	}
}

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
		height: 43px;
		margin: auto;
		text-align: center;
		border-radius: 5px;

		&:nth-child(2) {
			width: 210px;
		}
	}

	.pause {
		width: 196px;
		height: 44px;
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
		z-index: 1;
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
		z-index: 1;
	}

	.bubbleDialogue {
		width: 100px;
		top: 8px;
	}
}
</style>
