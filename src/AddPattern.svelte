<script>
  import AllPatterns from "./util/AllPatterns.svelte";
  import AllColors from "./util/AllColors.svelte";

  export let patterns;

  let colorId = 0;

  let click = patternId => {
    patterns.push({
      patternId,
      colorId
    });
    patterns = patterns;
  };
</script>

<style>
  .picker {
    display: flex;
    flex-wrap: wrap;
  }

  .main :global(.pattern-render) {
    width: var(--small-banner-width);
    height: var(--small-banner-height);

    margin: 0.25rem;
  }

  .main :global(.color) {
    margin: 0.25rem;
  }
</style>

<div class="main">
  <div class="color picker">
    <AllColors selectedId={colorId} click={c => (colorId = c)} rainbow />
  </div>

  <div class="pattern picker">
    <AllPatterns {colorId} {click} />
  </div>
</div>
