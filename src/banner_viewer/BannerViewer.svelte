<script>
  import { onMount } from "svelte";

  import BannerPattern from "./BannerPattern.svelte";

  export let patterns = [];
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
  <BannerPattern pattern={base} {shield} />

  {#each patterns as p}
    {#if p.visible}
      <BannerPattern pattern={p} {shield} />
    {/if}
  {/each}
</div>
