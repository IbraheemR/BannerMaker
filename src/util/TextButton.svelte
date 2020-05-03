<script>
  import { createEventDispatcher } from "svelte";

  export let lock = false;

  const dispatch = createEventDispatcher();

  let click = e => {
    if (!lock) dispatch("click", e);
  };
</script>

<style>
  .button {
    display: inline-block;

    border: 1px solid var(--theme-line);
    border-radius: var(--theme-rounding);
    padding: 0.5rem;

    user-select: none;
    cursor: pointer;

    fill: white;
  }

  .button:hover:not(:active):not(.lock) {
    border-color: var(--theme-fg);
  }

  .button.lock {
    border-color: darkred;
    color: darkred;
    fill: darkred;
  }

  .button :global(svg) {
    width: 1em;
    height: 1em;
    position: relative;
    top: 2px;
  }
</style>

<div class="button" on:click={click} class:lock>

  <slot />

</div>
