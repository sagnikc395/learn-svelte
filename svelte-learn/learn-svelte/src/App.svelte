<script type="js">
  import { get } from "svelte/store";

  // @ts-nocheck
  let count = 0;

  const increment = () => {
    //reactivity at play here
    count += 1;
  };

  let list = ["React", "Vue"];

  //change the length of the array as now a computed amoutn
  $: amount = list.length;

  const itemsAdd = () => {
    // update like this
    list = [...list, "Svelte"];
  };
  const removeItemFromStart = () => {
    list = list.slice(-1);
  };

  let album = [
    { track: "Billie Jean", artist: "Micheal Jackson", length: 100 },
    { track: "Ocean Eyes", artist: "Billie Eilish", length: 140 },
    { track: "Stairway to Heaven", artist: "Led Zepplin", length: 240 },
  ];

  $: albumLen = getAlbumLength(album);

  const getAlbumLength = (album) => {
    let trackLen = album.reduce((total, curr) => {
      return total + curr.length;
    }, 0);

    let [minutes, secs] = (trackLen / 60).toFixed(2).toString().split(".");
    return { minutes, secs };
  };

  const addTrack = () => {
    album = [
      ...album,
      { track: "melodic blue", artist: "Baby Keem", length: 420 },
    ];
  };

  //logging stuff with reactive blocks
  let ck = 0;
  $: console.log(`Event ${ck} has been triggereed !`);
</script>

<p>Clicked {count} {count === 1 ? "time" : "times"}</p>
<button on:click={increment}>Click</button>

<p>{list}</p>
<button on:click={itemsAdd}>Add New Item</button>
<button on:click={removeItemFromStart}>Remove Item</button>

<p>Final length of the List: {amount}</p>

<button on:click={addTrack}>Add New Album</button>
<p>Album length is {albumLen.minutes} minutes and {albumLen.secs} secs</p>

<button on:click={() => ck++}>Log</button>

<style>
  * {
    font: 2em;
  }
</style>
