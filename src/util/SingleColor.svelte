<script>
  import { colors } from "./design_info";

  export let colorId = 0;
  export let selected = false;
  export let click = console.log;
  export let hoverable = false;
</script>

<style>
  .color {
    width: 100%;
    height: 100%;
  }

  .color.hoverable:hover,
  .color.selected {
    box-shadow: 0px 0px 0px 2px var(--theme-line);
  }
</style>

<div
  class="color"
  class:hoverable
  class:selected
  style="background-color: #{colors[colorId].rgb.toString(16)}"
  on:click={click} />
