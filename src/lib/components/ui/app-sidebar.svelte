<script lang="ts">
  // import * as Sidebar from "$lib/components/ui/sidebar";
  // import { Button, buttonVariants } from "$lib/components/ui/button";
  import { Button } from "$lib/components/ui/button";
  let { sidebarMobile = $bindable({ visible: false }) } = $props();
</script>

<!-- <Sidebar.Root variant="inset" collapsible="offcanvas" class="px-3">
  <Button
    variant="ghost"
    class="flex-center size-10 rounded-full p-2 hover:cursor-pointer"
    onclick={() => (sidebarMobile = !sidebarMobile)}>
    <iconify-icon
      icon="iconamoon:menu-burger-horizontal-thin"
      width="24"
      height="24"
      style="stroke-width: 1.17px"></iconify-icon>
  </Button>
  <Sidebar.Content class="max-w-full">Testing.....</Sidebar.Content>
  </Sidebar.Root> -->
<div class="px-3">
  <Button
    variant="ghost"
    class="flex-center size-10 rounded-full p-2 hover:cursor-pointer"
    onclick={() => (sidebarMobile.visible = !sidebarMobile.visible)}>
    <iconify-icon
      icon="iconamoon:menu-burger-horizontal-thin"
      width="24"
      height="24"
      style="stroke-width: 1.17px"></iconify-icon>
  </Button>
  <span>Mobile Sidebar</span>
</div>
