<script setup>
const code = `
:root {
	--accent: #65B244;
	--accent-hover: #a86078;
	--contrast: #f16529;
	--contrast-hover: #fa7134;
	--dark-bg: #444;
	--dark-bg-darken: #333;
	--primary: #0d7296;
	--primary-hover: #0f8dbb;
	--success: #139b2d;
	--success-hover: #19c73a;
	--error: #980404;
}
`;

</script>

<template>
  <div class="color-view">
    <SectionHeader title="Colors"/>
    <pre><code>{{ code }}</code></pre>
    <ul class="colors__list">
      <ColorItem color="accent"/>
      <ColorItem color="accent-hover"/>
      <ColorItem color="contrast"/>
      <ColorItem color="contrast-hover"/>
      <ColorItem color="dark-bg"/>
      <ColorItem color="dark-bg-darken"/>
      <ColorItem color="primary"/>
      <ColorItem color="primary-hover"/>
      <ColorItem color="success"/>
      <ColorItem color="success-hover"/>
    </ul>
  </div>
</template>
