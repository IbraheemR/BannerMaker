<script>
  import { onMount } from "svelte";

  import DesignElementViewer from "./DesignElementViewer.svelte";

  export let design = [];
  export let base;
  export let shield = false;

  let width, height;
</script>

<style>
  .viewer {
    position: relative;

    width: var(--large-banner-width);
    height: var(--large-banner-height);
  }

  .viewer.shield {
    width: var(--large-shield-width);
    height: var(--large-shield-height);
  }
</style>

<div
  class="viewer"
  bind:clientWidth={width}
  bind:clientHeight={height}
  class:shield>
  <DesignElementViewer designElement={base} {shield} />

  {#each design as designElement}
    {#if designElement.visible}
      <DesignElementViewer {designElement} {shield} />
    {/if}
  {/each}
</div>
