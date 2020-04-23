<script>
  import { onMount } from "svelte";

  import BannerPattern from "./BannerPattern.svelte";

  export let patterns = [];
  export let base = 0;
  export let shield = false;

  let width, height;
</script>

<style>
  .viewer {
    position: relative;

    width: 200px;
    height: 400px;
  }

  .viewer.shield {
    width: 120px;
    height: 220px;
  }
</style>

<div
  class="viewer"
  bind:clientWidth={width}
  bind:clientHeight={height}
  class:shield>
  <BannerPattern pattern={{ Pattern: 'background', Color: base }} {shield} />

  {#each patterns as p}
    <BannerPattern pattern={p} {shield} />
  {/each}
</div>
