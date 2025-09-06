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
  --admin-bg: #f5f8fa;
  --admin-bg-darken: #e4e9ec;
  --text-color: #212529;
  --text-color-light: #636b6f;
}
`;

</script>

<template>
  <div class="color-view">
    <SectionHeader title="Colors"/>
    <CodePreview className="css" class="mb-16">
      {{ code }}
    </CodePreview>
    <ul class="colors__list">
      <ColorItem color="accent"/>
      <ColorItem color="accent-hover"/>
      <ColorItem color="accent-light"/>
      <ColorItem color="success"/>
      <ColorItem color="success-hover"/>
      <ColorItem color="error"/>
      <ColorItem color="error-hover"/>
      <ColorItem color="admin-bg"/>
      <ColorItem color="admin-bg-darken"/>
      <ColorItem color="text-color"/>
      <ColorItem color="text-color-light"/>
    </ul>
  </div>
</template>
