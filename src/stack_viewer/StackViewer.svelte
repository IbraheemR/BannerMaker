<script>
  import StackPattern from "./StackPattern.svelte";

  export let patterns = [];
  export let base;
  window.b = base;
</script>

<style>
  .banner-stack {
    display: flex;

    flex-direction: row;
  }
</style>

<div class="banner-stack">
  <StackPattern
    patternId="background"
    bind:colorId={base.colorId}
    bind:lock={base.lock} />

  {#each patterns as pattern, i}
    <StackPattern
      bind:patternId={pattern.patternId}
      bind:colorId={pattern.colorId}
      bind:lock={pattern.lock}
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
