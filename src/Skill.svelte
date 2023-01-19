<script lang="ts">
  import HideToggle from "./HideToggle.svelte";

  export let details: string = "";
  export let name: string = "";

  $: detailsList = details.split(",");
  $: length = detailsList.length;
</script>

<li>
  <HideToggle />
  <span class="w-28 inline-block">{name}</span>
  <span
    >{#each detailsList as detail, index}
      <span class={detail.includes("proficient") ? "font-bold" : ""}
        >{detail}{#if index + 1 !== length}, {/if}</span
      >
    {/each}</span
  >
</li>
