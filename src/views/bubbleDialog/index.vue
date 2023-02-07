<template>
	<div class="chat-message">
		<div class="message-item left" v-if="isLeft">
			<img class="avatar-img" :src="avatarImg" />
			<div class="bubble">
				<div class="msg-content">
					{{ content }}
				</div>
				<div class="arrow-up-left"></div>
			</div>
		</div>
		<div class="message-item right" v-else>
			<img class="avatar-img" :src="avatarImg" />
			<div class="bubble">
				<div class="msg-content">
					{{ content }}
				</div>
				<div class="arrow-up-right"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		content  : {type: String},
		isLeft   : {type: Boolean},
		avatarImg: {type: String}
	}
};
</script>

<style scoped>
.chat-message {
	margin: 30px 0;
	display: flex;
}

.message-item {
	position: relative;
	padding-left: 10px;
}

.message-item.left {
	margin-left: 0;
	margin-right: 10px;
	flex-direction: row-reverse;
	text-align: right;
}

.message-item.right {
	margin-left: 10px;
	margin-right: 0;
	flex-direction: row;
}

.avatar-img {
	border-radius: 20px;
	border: 2px solid #1989fa;
	width: 40px;
	height: 40px;
}

.bubble {
	padding: 10px 14px;
	border-radius: 12px;
	background: #f8fcff;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	position: relative;
	display: inline-block;
	border: 1px solid #e2e2e2;
}

.msg-content {
	font-size: 8px;
	color: #333;
}

.arrow-up-left {
	width: 0;
	height: 0;
	border: 5px solid;
	border-color: #f8fcff transparent transparent #f8fcff;
	position: absolute;
	left: -5px;
	top: 8px;
}

.arrow-up-right {
	width: 0;
	height: 0;
	border: 5px solid;
	border-color: transparent #f8fcff #f8fcff transparent;
	position: absolute;
	right: -5px;
	top: 8px;
}
</style>
