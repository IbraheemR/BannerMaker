<script>
  import { onMount } from "svelte";

  import TrashCan from "carbon-icons-svelte/lib/TrashCan32";
  import Locked from "carbon-icons-svelte/lib/Locked32";
  import Unlocked from "carbon-icons-svelte/lib/Unlocked32";
  import View from "carbon-icons-svelte/lib/View32";
  import ViewOff from "carbon-icons-svelte/lib/ViewOff32";
  import ArrowLeft from "carbon-icons-svelte/lib/ArrowLeft32";
  import ArrowRight from "carbon-icons-svelte/lib/ArrowRight32";

  import { patterns, colors } from "../util/design_info";

  import DesignElementChooser from "./DesignElementChooser.svelte";

  export let designElement;

  export let remove = null;
  export let left = null;
  export let right = null;
</script>

<style>
  .pattern-slot {
    max-width: 500px;

    margin: 0.5rem;

    display: grid;
    gap: 0.2rem;

    grid-template-rows:
      var(--button-size)
      var(--small-banner-height)
      var(--button-size);
    grid-template-columns: var(--button-size) var(--button-size);

    /* grid-template-areas:
      "visible lock remove"
      "banner banner banner"
      "left  _ right"; */
    grid-template-areas:
      "visible remove"
      "banner banner"
      "left right";
  }

  .button {
    fill: var(--theme-line);
    cursor: pointer;
    text-align: center;
    padding: 0.2em;
  }

  .button:hover:not(:active):not(.disabled) {
    fill: var(--theme-fg);
  }

  .button.red {
    fill: red;
  }

  .button.red:hover:not(:active),
  .button.disabled {
    fill: darkred;
  }

  .button :global(svg) {
    width: 100%;
    height: 100%;
  }

  .remove {
    grid-area: remove;
  }

  .tooltip {
    display: none;
    position: absolute;

    padding: 0.2rem;
    border: 1px solid var(--theme-line);
    border-radius: var(--theme-rounding);

    background: var(--theme-bg);

    z-index: 1000;
  }

  *:hover > .tooltip:not(:hover) {
    display: block;
  }

  .remove {
    grid-area: remove;
  }

  /* .lock {
    grid-area: lock;
  } */

  .banner {
    width: var(--small-banner-width);
    height: 100%;

    grid-area: banner;
    justify-self: center;
  }

  .left {
    grid-area: left;
  }

  .right {
    grid-area: right;
  }

  .visible {
    grid-area: visible;
  }
</style>

<div class="pattern-slot" draggable="true">

  {#if remove}
    <div
      class="button remove"
      class:disabled={designElement.lock}
      on:click={remove}>
      <TrashCan />
      <div class="tooltip">Remove</div>

    </div>
  {/if}

  {#if !designElement.isBackground}
    <div
      class="button visible"
      class:red={!designElement.visible}
      on:click={() => {
        designElement.visible = !designElement.visible;
      }}>
      {#if designElement.visible}
        <View />
      {:else}
        <ViewOff />
      {/if}
      <div class="tooltip">Toggle Visibility</div>

    </div>
  {/if}

  <!-- <div
    class="button lock"
    class:red={lock}
    on:click={() => {
      lock = !lock;
    }}>

    {#if lock}
      <Locked />
      <div class="tooltip">Unlock</div>
    {:else}
      <Unlocked />
      <div class="tooltip">Lock</div>
    {/if}

  </div> -->

  <div class="banner">
    <DesignElementChooser bind:designElement />

  </div>

  {#if left}
    <div class="button left" on:click={left}>
      <ArrowLeft />
      <div class="tooltip">Move Left</div>

    </div>
  {/if}

  {#if right}
    <div class="button right" on:click={right}>
      <ArrowRight />
      <div class="tooltip">Move Right</div>

    </div>
  {/if}
</div>
