<script>
  import BannerViewer from "./banner_viewer/BannerViewer.svelte";
  import StackViewer from "./stack_viewer/StackViewer.svelte";

  let test_patterns = [
    { Pattern: "flo", Color: 2 },
    { Pattern: "hhb", Color: 15 },
    { Pattern: "cs", Color: 2 },
    { Pattern: "mc", Color: 15 },
    { Pattern: "tts", Color: 15 },
    { Pattern: "bts", Color: 15 }
  ];

  let baseColorId = 15;
</script>

<style>
  .grid {
    width: 100%;
    height: 100%;

    display: grid;

    padding: 1rem;
    gap: 1rem;

    grid-template-columns: 1fr repeat(3, 2fr);
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "stack banner shield export"
      "add add buttons store";
  }

  .banner {
    grid-area: banner;
  }
  .shield {
    grid-area: shield;
  }
  .stack {
    grid-area: stack;
  }
</style>

<div class="grid">

  <div class="banner">
    <BannerViewer patterns={test_patterns} {baseColorId} />
  </div>

  <div class="shield">

    <BannerViewer patterns={test_patterns} {baseColorId} shield />
  </div>

  <div class="stack">
    <!-- This element will change pattern, so bind: its props -->
    <StackViewer bind:patterns={test_patterns} bind:baseColorId />
  </div>
</div>
