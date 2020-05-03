<script>
  import StackPattern from "./StackPattern.svelte";

  export let patterns = [];
  export let base;
  window.b = base;
</script>

<style>
  .banner-stack {
    max-width: 100%;

    display: flex;

    flex-direction: row;
    flex-wrap: nowrap;

    /* overflow-x: auto; */
  }
</style>

<div class="banner-stack">
  <StackPattern bind:pattern={base} />

  {#each patterns as pattern, i}
    <StackPattern
      bind:pattern
      remove={() => {
        if (!pattern.lock) {
          patterns.splice(i, 1);
          patterns = patterns;
        }
      }}
      left={i === 0 ? null : () => {
            let temp = patterns[i];
            patterns[i] = patterns[i - 1];
            patterns[i - 1] = temp;
          }}
      right={i === patterns.length - 1 ? null : () => {
            let temp = patterns[i];
            patterns[i] = patterns[i + 1];
            patterns[i + 1] = temp;
          }} />
  {/each}

</div>
