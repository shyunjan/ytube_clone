<script lang="ts">
  import { sidebarDesktop } from "src/universal-state.svelte";
  const tabletWidth = 1280;
  let { children } = $props();
</script>

<!-- Main Contents -->
<div class="flex flex-1">
  {#if sidebarDesktop.visible && sidebarDesktop.windowWidth > tabletWidth}
    <!-- Desktop Sidebar -->
    <div class="flex w-18 flex-col items-center justify-start p-2">
      <span>D Sidebar</span>
    </div>
    <!-- /Desktop Sidebar -->
  {/if}
  {@render children()}
</div>
<!-- /Main Contents -->
