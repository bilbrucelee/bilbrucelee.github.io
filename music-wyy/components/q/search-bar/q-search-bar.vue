<template>
	<!-- 搜索控件 -->
	<view >
		<u-search 
			v-model="searchWord"
			:placeholder="defaultSearchWord"  
			:show-action="false"
			:disabled="disabled"
			@change="onChange"
			@focus="onFocus"
			@blur="onBlur"
			@search="onSearch"
			@click="onClick"
		>
		</u-search>
	</view>
	
</template>

<script>
	export default {
		props: {
			disabled: Boolean,
		},
		data() {
			return {
				//默认搜索关键词
				defaultSearchWord : '',
				searchWord: '',
			}
		},
		created(){
			//获取默认搜索关键词
			this.$api.searchDefault().then(data=>{
				this.defaultSearchWord = data.data.showKeyword;
			});
		},
		methods:{
			/**
			 * 输入框内容发生变化时触发
			 */
			onChange(value){
				//防抖处理
				this.$u.debounce(()=>{
					this.$emit('change', value);
				}, 500)
			},
			onFocus(value){
				this.$emit('focus', value);
			},
			onBlur(value){
				this.$emit('blur', value);
			},
			onSearch(value){
				this.$emit('search', value);
			},
			onClick(value){
				this.$emit('click', value);
			},
			setWord(value){
				this.searchWord = value;
			}
		},
	}
</script>

<style>
</style>
