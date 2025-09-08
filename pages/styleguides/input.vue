<script setup lang="ts">
definePageMeta({
  layout: "styleguides",
});

const name = ref("");

const code_html = `<UiInput id="name" v-model="name" label="Input" placeholder="placeholder..." />`;

const code_js = `
<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    required: false,
    default: null,
  },
  placeholder: {
    type: String,
    required: false,
    default: null,
  },
  id: {
    type: String,
    required: true,
  },
  errors: {
    type: Array,
    required: false,
    default: null,
  },
});

type InputValue = string;

const model = defineModel<InputValue>({ default: "" });

const classes = computed(() => {
  return {
    'input--error': props.errors && props.errors.length,
    'input--success': props.errors && !props.errors.length,
  };
});

  <div class="input">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      :id="id"
      v-model="model"
      :type="type"
      :name="id"
      :class="classes"
      :placeholder="placeholder !== undefined ? placeholder : null" />
    <div v-if="errors && errors.length" class="input__message input__message--error">
      <p v-for="error in errors" :key="error">{{ error }}</p>
    </div>
  </div>
</template>
<style lang="scss">
.input {
  position: relative;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.6rem;
    font-weight: bold;
  }
  input {
    display: block;
    width: 100%;
    height: 3.4rem;
    border: 1px solid #aaa;
    border-radius: 3px;
    padding: 5px;
    &.input--success {
      border-color: var(--success);
    }
    &.input--error {
      border-color: var(--error);
    }
  }
  &__message {
    margin-top: 0.6rem;
    font-size: 1.2rem;
    color: var(--error);
  }
}
</style>

`;

onMounted(() => {
  usePrism();
});
</script>

<template>
  <div class="inputs">
    <div class="inputs__left">
      <div class="inputs__item">
        <UiInput id="name" v-model="name" label="Input" placeholder="placeholder..." />
      </div>
      <div class="inputs__item">
        <UiInput
          id="name-error"
          v-model="name"
          label="Input Error"
          placeholder="placeholder..."
          :errors="['new error']" />
      </div>
      <div class="inputs__item">
        <UiInput
          id="name-success"
          v-model="name"
          label="Input Sucess"
          placeholder="placeholder..."
          :errors="[]" />
      </div>
    </div>
    <div class="inputs__right">
      <CodePreview language="html">
        {{ code_html }}
      </CodePreview>
      <CodePreview language="js">
        {{ code_js }}
      </CodePreview>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.inputs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  &__left {
    width: 30%;
  }
  &__right {
    width: 66%;
  }
}
</style>
