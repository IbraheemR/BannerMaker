<script>
  import { onMount } from "svelte";

  import BannerPattern from "./BannerPattern.svelte";

  export let patterns = [];
  export let baseColorId = 0;
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
  <BannerPattern patternId="background" colorId={baseColorId} {shield} />

  {#each patterns as p}
    <BannerPattern patternId={p.Pattern} colorId={p.Color} {shield} />
  {/each}
</div>
