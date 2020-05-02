<script>
  import TextButton from "./util/TextButton.svelte";
  import { colors, patterns as patternTypes } from "./util/pattern_info";

  export let patterns;
  export let base;

  window.p = patternTypes;

  let lock = false;
  $: lock = patterns.filter(p => p.lock).length || base.lock;

  let clearAll = () => {
    base.colorId = 0;
    patterns = [];
  };

  let randomPattern = () => {
    base.colorId = choice(colors).id;
    let newPatterns = [];
    while (newPatterns.length < 6) {
      newPatterns.push({
        patternId: choice(
          Object.keys(patternTypes).filter(
            k => k !== "background" && k !== "shield"
          )
        ),
        colorId: choice(colors).id
      });
    }
    patterns = newPatterns;
  };

  let randomizeColors = () => {
    // Generate mapping
    let colorIds = colors.map(c => c.id);
    let shuffedColors = shuffle([...colorIds]);
    let mapping = new Map(colorIds.map((cId, i) => [cId, shuffedColors[i]]));

    patterns = patterns.map(p => ({
      ...p,
      colorId: p.lock ? p.colorId : mapping.get(p.colorId)
    }));
    if (!base.lock) base.colorId = mapping.get(base.colorId);
  };

  let shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  let choice = array => array[(Math.random() * array.length) << 0];
</script>

<TextButton on:click={clearAll} {lock}>Clear All</TextButton>
<TextButton on:click={randomPattern} {lock}>Random Pattern</TextButton>
<TextButton on:click={randomizeColors}>Randomize Colors</TextButton>
