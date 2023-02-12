<template>
	<div class="chat-box">
		<ul>
			<li v-for="item in chatList" :key="item.id">
				{{ item.text }}
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: {
		// 获取chat模块的chatData
		...mapState(["chatData"]),
		// 将chatData转换为list
		chatList() {
			// 如果chatData不存在，返回空数组
			const data = this.chatData || [];
			// 定义一个空数组
			const list = [];
			// 遍历chatData
			data.forEach((item) => {
				list.push({
					id  : item.id,
					text: item.text
				});
			});
			// 返回list
			return list;
		}
	}
};
</script>
