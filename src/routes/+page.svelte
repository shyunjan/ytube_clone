<script lang="ts">
  import "iconify-icon";
  // import Icon from "@iconify/svelte";

  // import * as Sheet from "$lib/components/ui/sheet";
  import { Button } from "$lib/components/ui/button";
</script>

<!-- Main Contents 영역 -->
<div class="flex flex-1 justify-start">
  <!-- Sidebar (for only icons) -->
  <div class="flex w-18 flex-col items-center justify-start p-1">
    <!-- Home Button -->
    <Button
      variant="ghost"
      class="flex-center h-18 w-16 flex-col gap-1.5 rounded-xl p-1 hover:cursor-pointer">
      <iconify-icon icon="entypo:home" width="24" height="24"></iconify-icon>
      <span class="text-tiny">홈</span>
    </Button>
    <!-- /Home Button -->
  </div>
  <!-- /Sidebar (for only icons) -->
  <!-- Video List -->
  <div class="flex flex-1 bg-green-800"></div>
  <!-- /Video List -->
</div>
<!-- /Main Contents -->
