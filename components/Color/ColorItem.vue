<script setup>
	const props = defineProps({
		color: {
			type: String,
			required: true,
		},
    hex: {
      type: String,
      required: true,
    }
	});
</script>
<template>
	<li class="color-item">
		<span
			class="color-item__value"
			:style="{ background: `var(--${color})` }"
		></span>
		<h3 class="color-item__title">{{ color }}</h3>
    <span class="color-item__hex">{{ hex }}</span>
	</li>
</template>
<style lang="scss" scoped>
	.color-item {
		display: flex;
    justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
    cursor: pointer;
    width: 30rem;;
    &__title {
      font-weight: normal;
      text-align: left;
      flex: 1;
    }
		&__value {
			margin-right: 1rem;
			width: 2rem;
			height: 2rem;
		}
	}
</style>
