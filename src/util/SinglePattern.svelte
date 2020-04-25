<script>
  // TODO: should probably merge with SinglePattern.svelte, but for now they do sligntyl different things.

  import { patterns, colors } from "../util/pattern_info";

  import BannerPattern from "../banner_viewer/BannerPattern.svelte";

  export let patternId = "flo";
  export let colorId;

  export let hoverable = false;
  export let selected = false;
  export let click = console.log;
</script>

<style>
  .pattern-render {
    position: relative;

    background-color: var(--theme-fg);
  }

  .pattern-render,
  .pattern-render :global(*) {
    box-sizing: content-box;
  }

  .pattern-render.hoverable:hover,
  .pattern-render.selected {
    box-shadow: 0px 0px 0px 2px var(--theme-line);
  }
</style>

<div class="pattern-render" class:hoverable class:selected on:click={click}>
  <BannerPattern {patternId} {colorId} />
</div>
