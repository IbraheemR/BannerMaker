<script>
  import DesignElement from "./util/DesignElement";

  import AllPatterns from "./util/AllPatterns.svelte";
  import AllColors from "./util/AllColors.svelte";

  export let design;

  let colorId = 0;

  let click = patternId => {
    design.push(new DesignElement(patternId, colorId));
    design = design;
  };
</script>

<style>
  .main {
    width: 100%;

    display: grid;
    gap: 0.5rem;

    grid-template-areas: "color pattern";
    grid-template-columns: auto 1fr;
  }

  .picker {
    display: grid;
    gap: 0.5rem;
  }

  .color.picker {
    grid-template-columns: var(--button-size) var(--button-size);
    grid-template-rows: repeat(8, var(--button-size));
    grid-area: color;
  }

  .pattern.picker {
    grid-template-columns: repeat(10, var(--small-banner-width));
    grid-template-rows: repeat(4, var(--small-banner-height));
    grid-area: pattern;
  }

  .picker :global(*) {
    cursor: pointer;
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
