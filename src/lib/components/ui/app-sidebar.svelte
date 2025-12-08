<script lang="ts">
  // import * as Sidebar from "$lib/components/ui/sidebar";
  import MenuLogoButton from "$lib/components/ui/menu-logo-button.svelte";

  // let { sidebarMobile = $bindable({ visible: false }) } = $props();
  const props = $props();
</script>

<!-- <Sidebar.Root variant="inset" collapsible="offcanvas" class="px-3">
  <Button
    variant="ghost" class="flex-center size-10 rounded-full p-2 hover:cursor-pointer" onclick={() => (sidebarMobile = !sidebarMobile)}>
    <iconify-icon icon="iconamoon:menu-burger-horizontal-thin" width="24" height="24" style="stroke-width: 1.17px"></iconify-icon>
  </Button>
  <Sidebar.Content class="max-w-full">Testing.....</Sidebar.Content>
  </Sidebar.Root> -->
<div class="flex w-50 flex-col px-4 py-2">
  <MenuLogoButton {...props} />
  <div class="mt-2 flex w-full flex-col justify-start px-3 py-2">
    <span>M Sidebar</span>
  </div>
</div>
