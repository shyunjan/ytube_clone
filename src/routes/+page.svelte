<script lang="ts">
  import { sidebarDesktop } from "../universal-state.svelte";
  import "iconify-icon";
  import { Button } from "$lib/components/ui/button";

  const tabletWidth = 1280;
</script>

<!-- Main Contents 영역 -->
<div class="flex flex-1">
  {#if sidebarDesktop.visible && sidebarDesktop.windowWidth > tabletWidth}
    <div class="flex w-18 flex-col items-center justify-start p-1">
      <span>Desktop Sidebar</span>
    </div>
  {/if}
  <!-- Video List -->
  <div class="flex flex-1 bg-green-800">video1, video2, video3 ... videoN</div>
  <!-- /Video List -->
</div>
<!-- /Main Contents -->
