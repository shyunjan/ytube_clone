<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar";
  // import { Button, buttonVariants } from "$lib/components/ui/button";
  import { Button } from "$lib/components/ui/button";
  export let sidebarMobile = false;
</script>

<Sidebar.Root variant="inset" collapsible="offcanvas">
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
  <Sidebar.Content>Testing.....</Sidebar.Content>
</Sidebar.Root>
