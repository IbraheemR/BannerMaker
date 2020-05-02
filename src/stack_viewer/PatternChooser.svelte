<script>
  import AllPatterns from "../util/AllPatterns.svelte";
  import AllColors from "../util/AllColors.svelte";

  import SinglePattern from "../util/SinglePattern.svelte";

  export let patternId;
  export let colorId;

  // Logic to make hovering nice (won't show if only passing over)
  let show = false;
  let hover = false;
  let showTimeout;
  const hoverTime = 200;

  let hoverOver = () => {
    hover = true;
    clearTimeout(showTimeout);
    showTimeout = setTimeout(() => {
      show = hover;
    }, hoverTime);
  };

  let hoverOff = () => {
    hover = false;
    clearTimeout(showTimeout);
    showTimeout = setTimeout(() => {
      show = hover;
    }, hoverTime);
  };
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
    left: 0;

    z-index: 1000;

    display: grid;
    gap: 0.5rem;

    background-color: var(--theme-bg);
    padding: 0.5rem;
    border: 1px solid var(--theme-line);
    border-radius: var(--theme-rounding);
  }

  .color.picker {
    top: calc(100% + 0.5rem);

    grid-template-columns: repeat(16, 1fr);
  }

  .pattern.picker {
    top: calc(100% + 3.5rem);

    grid-template-columns: repeat(10, 1fr);
  }

  .pattern-button:not(.show) .picker {
    display: none;
  }
</style>

<div
  class="pattern-button"
  class:show
  on:mouseenter={hoverOver}
  on:mouseleave={hoverOff}>
  <SinglePattern hoverable {patternId} {colorId} />

  {#if patternId !== 'background'}
    <div class="pattern picker">

      <AllPatterns
        selectedId={patternId}
        {colorId}
        click={newId => (patternId = newId)} />

    </div>
  {/if}

  <div class="color picker">
    <AllColors
      rainbow
      selectedId={colorId}
      click={newColorId => {
        colorId = newColorId;
      }} />
  </div>

</div>
