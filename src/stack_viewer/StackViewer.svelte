<script>
  import StackPattern from "./StackPattern.svelte";

  export let patterns = [];
  export let baseColorId = 0;
</script>

<style>
  .banner-stack {
    /* display: flex; */

    /* flex-direction: row; */

    border: 1px solid var(--theme-line);
  }
</style>

<div class="banner-stack">
  <StackPattern patternId="background" bind:colorId={baseColorId} />

  {#each patterns as pattern, i (pattern)}
    <StackPattern
      bind:patternId={pattern.Pattern}
      bind:colorId={pattern.Color}
      remove={() => {
        patterns.splice(i, 1);
        patterns = patterns;
      }} />
  {/each}

</div>
