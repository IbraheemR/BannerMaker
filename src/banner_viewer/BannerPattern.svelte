<script>
  import { patterns, colors } from "../util/pattern_info";

  export let patternId;
  export let colorId;
  export let shield = false;
  let image, color;

  $: {
    image = patterns[patternId][shield ? "shieldImage" : "bannerImage"];
    color = colors[colorId].rgb.toString(16);
  }
</script>

<style>
  .background,
  .background-tint,
  .pattern {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background-size: contain;
    image-rendering: crisp-edges;
    mask-size: contain;
  }

  .background-tint {
    mix-blend-mode: multiply;
  }

  .pattern {
    mask-size: 100%;
    mask-type: luminance;
  }
</style>

{#if patternId == 'background'}
  {#if shield}
    <div
      class="background"
      style="background-image: url({patterns.shield.shieldImage});" />
  {/if}
  <div class="background" style="background-image: url({image});" />

  <div
    class="background-tint"
    style="background-color: #{color}; mask-image: url({image});" />
{:else}

  <div
    class="pattern"
    style="background-color: #{color}; mask-image: url({image});" />
{/if}
