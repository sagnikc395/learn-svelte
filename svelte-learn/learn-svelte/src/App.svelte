<script type="js">
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

  //reactive blocks

  let count2 = 0;
  $: {
    console.log(`The count is ${count2}`);
    if (count2 >= 4) {
      console.log(`Restarting ccounter.`);
      count2 = 0;
    }
  }

  //logic in svelte
  let user = {
    loggedIn: false,
  };

  const toggle = () => {
    user.loggedIn = !user.loggedIn;
  };

  //iterating over data

  let todos = [
    { id: 1, text: "Todo #1", completed: true },
    { id: 2, text: "Todo #2", completed: true },
    { id: 3, text: "Todo #3", completed: false },
    { id: 4, text: "Todo #4", completed: true },
    { id: 5, text: "Todo #5", completed: false },
  ];
</script>

<p>Clicked {count} {count === 1 ? "time" : "times"}</p>
<button on:click={increment}>Click</button>

<p>{list}</p>
<button on:click={itemsAdd}>Add New Item</button>
<button on:click={removeItemFromStart}>Remove Item</button>

<p>Final length of the List: {amount}</p>

<button on:click={addTrack}>Add New Album</button>
<p>Album length is {albumLen.minutes} minutes and {albumLen.secs} secs</p>

<button on:click={() => count2++}>Logging Data</button>

<!-- conditional rendering in svelte-->
{#if user.loggedIn}
  <button on:click={toggle}>Log Out</button>
{/if}

{#if !user.loggedIn}
  <button on:click={toggle}>L In</button>
{/if}

<ul>
  {#each todos as todo}
    <li>
      <input checked={todo.completed} type="checkbox" />
      <span>{todo.text}</span>
    </li>
  {/each}
</ul>

<style>
  * {
    font: 2em;
  }
</style>
