<script>
  import { patterns } from "../util/pattern_info";

  import AllPatterns from "../util/AllPatterns.svelte";
  import AllColors from "../util/AllColors.svelte";

  import SinglePattern from "../util/SinglePattern.svelte";

  export let patternId;
  export let colorId;
</script>

<style>
  .pattern-button {
    position: relative;
    cursor: pointer;
  }

  .pattern-button :global(.pattern-render) {
    width: var(--small-banner-width);
    height: var(--small-banner-height);
  }

  .picker {
    position: absolute;
    left: 90%;

    z-index: 1000;

    display: grid;
    gap: 0.5rem;

    background-color: var(--theme-bg);
    padding: 0.5rem;
    border: 1px solid var(--theme-line);
  }

  .color.picker {
    bottom: 100%;

    grid-template-columns: repeat(8, 1fr);
  }

  .color.picker.background {
    top: 0;
    bottom: unset;
  }

  .pattern.picker {
    top: 0;

    grid-template-columns: repeat(8, 1fr);
  }

  .pattern-button:not(:hover) .picker {
    display: none;
  }
</style>

<div class="pattern-button">
  <SinglePattern hoverable {patternId} {colorId} />

  {#if patternId !== 'background'}
    <div class="pattern picker">

      <AllPatterns
        selectedId={patternId}
        {colorId}
        click={newId => (patternId = newId)} />

    </div>
  {/if}

  <div class="color picker" class:background={patternId === 'background'}>
    <AllColors
      rainbow
      selectedId={colorId}
      click={newColorId => {
        colorId = newColorId;
      }} />
  </div>

</div>
