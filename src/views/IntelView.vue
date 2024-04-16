<script setup lang="ts">
import 'ag-grid-community/styles/ag-grid.min.css'
import 'ag-grid-community/styles/agGridClassicFont.min.css'
import { AgGridVue } from 'ag-grid-vue3'
import { useGridRankings } from '../composables/grid-rankings'
import { GridOptions } from 'ag-grid-community'

const { rowData, colDefs, options } = useGridRankings()
</script>

<template>
  <div class="intel dark-bg glare">
    <RouterLink to="/" class="go-back"><< Go back to directory</RouterLink>
    <AgGridVue
      :row-data="rowData"
      :column-defs="colDefs"
      :grid-options="options as GridOptions"
      class="ag-theme-vp"
    />
  </div>
</template>

<style scoped>
.intel {
  padding: 1rem;
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
}

.go-back {
  position: absolute;
  top: -3.5rem;
  right: 0;
}

.ag-theme-vp {
  flex-grow: 1;
  border: 1px solid var(--clr-red2);

  --ag-font-family: Quantico;
  --ag-font-size: 1rem;

  --ag-cell-horizontal-padding: 1rem;

  --ag-foreground-color: var(--clr-red1);
  --ag-secondary-foreground-color: var(--clr-red1);
  --ag-background-color: transparent;
  --ag-modal-overlay-background-color: transparent;
  --ag-header-background-color: var(--clr-red3);
  --ag-header-cell-moving-background-color: var(--clr-red4);
  --ag-header-cell-hover-background-color: var(--clr-red4);

  --ag-borders: 1px solid;
  --ag-border-color: var(--clr-red2);
  --ag-header-column-separator-display: block;

  --ag-icon-font-family: agGridClassic;
}

.ag-theme-vp :deep(.ag-header) {
  font-weight: bold;
}

.ag-theme-vp :deep(.ag-header-group-cell) {
  justify-content: center;
}

.ag-theme-vp :deep(.ag-horizontal-left-spacer) {
  border-top: 2px solid var(--clr-red2);
  overflow-x: hidden;
}

.ag-theme-vp :deep(.ag-overlay-loading-center) {
  border: none;
}
</style>
