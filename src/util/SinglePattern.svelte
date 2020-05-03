<script>
  import DesignElement from "../util/DesignElement";
  import { patterns, colors } from "../util/design_info";

  import DesignElementViewer from "../banner_viewer/DesignElementViewer.svelte";

  export let patternId;
  export let colorId;

  export let hoverable = false;
  export let selected = false;
  export let click = console.log;
</script>

<style>
  .pattern-render {
    position: relative;

    background: var(--theme-fg);
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
  <DesignElementViewer designElement={new DesignElement(patternId, colorId)} />
</div>
