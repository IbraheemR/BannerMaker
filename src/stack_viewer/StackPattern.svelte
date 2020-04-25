<script>
  import { patterns, colors } from "../util/pattern_info";

  import PatternChooser from "./PatternChooser.svelte";

  export let patternId;
  export let colorId;

  export let remove = null;
</script>

<style>
  .pattern-slot {
    max-width: 500px;

    margin: 0.5rem;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-evenly;
  }

  .button {
    cursor: pointer;
  }
</style>

<div class="pattern-slot">
  <PatternChooser bind:patternId bind:colorId />

  <div class="remove button" on:click={remove}>
    {#if remove}X{/if}
  </div>
</div>
