<script lang="ts">
  import { sidebarDesktop } from "src/universal-state.svelte";
  import DtSidebar from "$lib/components/ui/dt-sidebar.svelte";
  const tabletWidth = 1280;
  let { children } = $props();
</script>

<!-- Main Contents -->
<div class="flex flex-1">
  {#if sidebarDesktop.visible && sidebarDesktop.windowWidth > tabletWidth}
    <DtSidebar />
  {/if}
  {@render children()}
</div>
<!-- /Main Contents -->
