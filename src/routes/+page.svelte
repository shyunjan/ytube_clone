<script lang="ts">
  import { sidebarDesktop } from "../universal-state.svelte.js";
  const tabletWidth = 1280;
</script>

<!-- Main Contents -->
<div class="flex flex-1">
  {#if sidebarDesktop.visible && sidebarDesktop.windowWidth > tabletWidth}
    <!-- Desktop Sidebar -->
    <div class="flex w-50 flex-col justify-start px-7 py-2">
      <span>D Sidebar</span>
    </div>
    <!-- /Desktop Sidebar -->
  {/if}
  <!-- Video List -->
  <div class="flex flex-1 bg-green-800">video1, video2, video3 ... videoN</div>
  <!-- /Video List -->
</div>
<!-- /Main Contents -->
