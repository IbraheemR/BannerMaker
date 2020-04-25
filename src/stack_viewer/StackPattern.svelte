<script>
  import TrashCan16 from "carbon-icons-svelte/lib/TrashCan16";
  import Locked16 from "carbon-icons-svelte/lib/Locked16";
  import Unlocked16 from "carbon-icons-svelte/lib/Unlocked16";
  import View16 from "carbon-icons-svelte/lib/View16";
  import ViewOff16 from "carbon-icons-svelte/lib/ViewOff16";
  import ArrowLeft16 from "carbon-icons-svelte/lib/ArrowLeft16";
  import ArrowRight16 from "carbon-icons-svelte/lib/ArrowRight16";

  import { patterns, colors } from "../util/pattern_info";

  import PatternChooser from "./PatternChooser.svelte";

  export let patternId;
  export let colorId;
  export let lock = false;
  // export let visible = true;

  export let remove = null;
  export let left = null;
  export let right = null;
</script>

<style>
  .pattern-slot {
    max-width: 500px;

    margin: 0.5rem;

    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr 1fr 1fr;

    /* grid-template-areas:
      "visible lock remove"
      "banner banner banner"
      "left  _ right"; */
    grid-template-areas:
      "lock remove"
      "banner banner"
      "left right";
  }

  .button {
    fill: var(--theme-line);
    cursor: pointer;
    text-align: center;
    padding: 0.2em;
  }

  .button:hover {
    fill: var(--theme-fg);
  }

  .button.red {
    fill: red;
  }

  .remove {
    grid-area: remove;
  }

  .tooltip {
    display: none;
    position: absolute;

    padding: 0.2rem;
    border: 1px solid var(--theme-line);
    background: var(--theme-bg);

    z-index: 1000;
  }

  *:hover > .tooltip:not(:hover) {
    display: block;
  }

  .remove {
    grid-area: remove;
  }

  .lock {
    grid-area: lock;
  }

  .banner {
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
    <div class="button remove" class:red={lock} on:click={remove}>
      <TrashCan16 />
      <div class="tooltip">Remove</div>

    </div>
  {/if}

  <!-- <div
    class="button visible"
    class:red={!visible}
    on:click={() => {
      visible = !visible;
    }}>
    {#if visible}
      <View16 />
    {:else}
      <ViewOff16 />
    {/if}
    <div class="tooltip">Toggle Visibility</div>

  </div> -->

  <div
    class="button lock"
    class:red={lock}
    on:click={() => {
      lock = !lock;
    }}>

    {#if lock}
      <Locked16 />
      <div class="tooltip">Unlock</div>
    {:else}
      <Unlocked16 />
      <div class="tooltip">Lock</div>
    {/if}

  </div>
  <div class="banner">
    <PatternChooser bind:patternId bind:colorId />

  </div>

  {#if left}
    <div class="button left" on:click={left}>
      <ArrowLeft16 />
      <div class="tooltip">Move Left</div>

    </div>
  {/if}

  {#if right}
    <div class="button right" on:click={right}>
      <ArrowRight16 />
      <div class="tooltip">Move Right</div>

    </div>
  {/if}
</div>
