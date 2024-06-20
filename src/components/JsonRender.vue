<template>
    <pre style="border: 1px solid #333; border-radius: 4px; padding: 4px;">{{ JSON.stringify(value, null, 2) }}</pre>
</template>
<script setup lang="ts">
defineProps(['value'])
</script>