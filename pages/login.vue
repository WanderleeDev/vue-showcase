<template>
  <div>login</div>
  <pre>
    <code>
      {{ JSON.stringify(data, null, 2) }}
    </code>
  </pre>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient();
const { data } = await useAsyncData("projects", async () => {
  const { data } = await supabase.from("project").select("*");
  return data;
});
</script>

<style></style>
