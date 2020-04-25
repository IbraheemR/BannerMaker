<script>
  import StackPattern from "./StackPattern.svelte";

  export let patterns = [];
  export let baseColorId = 0;
</script>

<style>
  .banner-stack {
    display: flex;

    flex-direction: row;
  }
</style>

<div class="banner-stack">
  <StackPattern patternId="background" bind:colorId={baseColorId} />

  {#each patterns as pattern, i}
    <StackPattern
      bind:patternId={pattern.Pattern}
      bind:colorId={pattern.Color}
      bind:lock={pattern.lock}
      remove={() => {
        patterns.splice(i, 1);
        patterns = patterns;
      }}
      left={i === 0 ? null : () => {
            console.log('left');
            let temp = patterns[i];
            patterns[i] = patterns[i - 1];
            patterns[i - 1] = temp;
          }}
      right={i === patterns.length - 1 ? null : () => {
            console.log('right');
            let temp = patterns[i];
            patterns[i] = patterns[i + 1];
            patterns[i + 1] = temp;
          }} />
  {/each}

</div>
