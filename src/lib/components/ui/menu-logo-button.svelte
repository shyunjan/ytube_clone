<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { TextAlignJustify } from "@lucide/svelte/icons";

  const { openSidebar: onclick } = $props();
</script>

<div class="flex items-center">
  <!-- Menu Button -->
  <Button variant="ghost" class="flex-center size-10 rounded-full p-2" {onclick}>
    <!-- <i class="fa-solid fa-bars text-xl"></i> -->
    <!-- <Icon icon="iconamoon:menu-burger-horizontal-thin" class="size-6" stroke-width="1.17" /> -->
    <!-- <iconify-icon icon="iconamoon:menu-burger-horizontal-thin" width="24" height="24" style="stroke-width: 1.17px"></iconify-icon> -->
    <TextAlignJustify class="size-5.5" />
  </Button>
  <!-- /Menu Button -->
  <img src="/logos/Youtube-logo-with-flat-design-edited.png" alt="logo" class="mx-3 h-6.5 w-25" />
</div>
