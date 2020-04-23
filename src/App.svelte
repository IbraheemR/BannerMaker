<script>
  import BannerViewer from "./banner_viewer/BannerViewer.svelte";

  let test_patterns = [
    { Pattern: "flo", Color: 2 },
    { Pattern: "hhb", Color: 15 },
    { Pattern: "cs", Color: 2 },
    { Pattern: "mc", Color: 15 },
    { Pattern: "tts", Color: 15 },
    { Pattern: "bts", Color: 15 }
  ];
</script>

<style>
  .center {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .center > :global(*) {
    margin: 1rem;
  }
</style>

<div class="center">
  <BannerViewer patterns={test_patterns} base={15} />
  <BannerViewer patterns={test_patterns} base={15} shield />

</div>
