import { ColDef, ColGroupDef } from 'ag-grid-community'

export type GridColumn<TData = any, TValue = any> =
  | ColDef<TData, TValue>
  | ColGroupDef<TData>
