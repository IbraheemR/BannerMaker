<script>
  import AllPatterns from "../util/AllPatterns.svelte";
  import AllColors from "../util/AllColors.svelte";

  import SinglePattern from "../util/SinglePattern.svelte";

  export let pattern;

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

    width: 100%;
    height: 100%;
  }

  .pattern-button :global(.pattern-render) {
    width: 100%;
    height: 100%;
  }

  .hover {
    position: absolute;
    top: 90%;
    left: 0;

    z-index: 1000;
  }

  .picker {
    display: grid;
    gap: 0.5rem;

    margin: 0.2rem 0;
    padding: 0.5rem;

    background-color: var(--theme-bg);

    border: 1px solid var(--theme-line);
    border-radius: var(--theme-rounding);
  }

  .color.picker {
    grid-template-columns: repeat(16, var(--button-size));
    grid-template-rows: repeat(1, var(--button-size));
  }

  .pattern.picker {
    grid-template-columns: repeat(10, var(--small-banner-width));
    grid-template-rows: repeat(4, var(--small-banner-height));
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
  <SinglePattern hoverable selected={show} {pattern} />

  <div class="hover">
    <div class="color picker">
      <AllColors
        rainbow
        selectedId={pattern.colorId}
        click={newColorId => {
          pattern.colorId = newColorId;
        }} />
    </div>

    {#if pattern.patternId !== 'background'}
      <div class="pattern picker">

        <AllPatterns
          selectedId={pattern.patternId}
          colorId={pattern.colorId}
          click={newId => (pattern.patternId = newId)} />

      </div>
    {/if}
  </div>

</div>
