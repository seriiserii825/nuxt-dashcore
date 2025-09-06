<script setup>
const code = `
:root {
  --accent: #3c8dbc;
	--accent-hover: #307197;
  --accent-light: #00c0ef;
  --success: #00a65a;
  --success-hover: #008d4c;
  --error: #dd4b39;
  --error-hover: #d73925;
  --text-color: #212529;
  --text-color-light: #636b6f;
  --font-1: "Source Sans Pro", sans-serif;
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
      <ColorItem color="accent-light"/>
      <ColorItem color="success"/>
      <ColorItem color="success-hover"/>
      <ColorItem color="error"/>
      <ColorItem color="error-hover"/>
      <ColorItem color="text-color"/>
      <ColorItem color="text-color-light"/>
    </ul>
  </div>
</template>
