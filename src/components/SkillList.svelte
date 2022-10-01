<script>
  import { languages, technologies, tools } from "../pages/projects/data";
  import SkillItem from "./SkillItem.svelte";

  const sections = ["Technologies", "Languages", "Tools"];
  let selectedSec = "Technologies";

  const changeSection = (selected) => {
    selectedSec = selected;
  };
</script>

<ul class="sectionNavigation">
  {#each sections as section}
    <li
      on:click={() => changeSection(section)}
      class={`sectionItem${selectedSec === section ? " active" : ""}`}
    >
      {section}
    </li>
  {/each}
</ul>
{#if selectedSec === "Technologies"}
  <ul data-aos="zoom-in-right" class="skillSection">
    {#each technologies as technology}
      <SkillItem skill={technology} />
    {/each}
  </ul>
{:else if selectedSec === "Languages"}
  <ul data-aos="zoom-in" class="skillSection">
    {#each languages as language}
      <SkillItem skill={language} />
    {/each}
  </ul>
{:else}
  <ul data-aos="zoom-in-left" class="skillSection">
    {#each tools as tool}
      <SkillItem skill={tool} />
    {/each}
  </ul>
{/if}

<style>
  .sectionNavigation {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  .sectionItem {
    color: var(--hover-color);
    list-style: none;
    padding-right: 15px;
    cursor: pointer;
    font-weight: bold;
  }
  .sectionItem:hover {
    color: var(--secondary-color);
    transition: all 1s;
  }
  .active {
    color: var(--secondary-color);
  }
  .skillSection {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  @media (max-width: 1305px) {
    .sectionNavigation {
      padding: 0 15px;
      justify-content: center;
    }
    .skillSection {
      justify-content: center;
    }
  }
</style>
