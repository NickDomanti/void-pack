import { onMounted, ref } from 'vue'
import { useUexService } from '../services/uex-service'
import { GridColumn } from '../types/grid-column'
import { UexCommodityRanking } from '../types/uex'
import { GridOptions } from 'ag-grid-community'

export function useGridRankings() {
  const { rankings, fetchRankings } = useUexService()

  onMounted(async () => {
    await fetchRankings()
  })

  const colDefs = ref<GridColumn<UexCommodityRanking, any>[]>([
    {
      headerClass: 'grid-index',
      valueGetter: (row) => (row.node?.rowIndex ?? 0) + 1,
      width: 75,
      pinned: 'left',
      suppressMovable: true
    },
    {
      headerName: 'Commodity',
      children: [
        {
          headerName: 'Name',
          field: 'name',
          pinned: 'left',
          suppressMovable: true
        }
      ]
    },
    {
      headerName: 'Supply',
      children: [
        {
          headerName: 'Inventory',
          field: 'availability_buy'
        },
        {
          headerName: 'SCU',
          field: 'scu_buy_avg'
        },
        {
          headerName: 'UEC',
          field: 'price_buy_minimum'
        }
      ]
    },
    {
      headerName: 'Demand',
      children: [
        {
          headerName: 'Inventory',
          field: 'availability_sell'
        },
        {
          headerName: 'SCU',
          field: 'scu_sell_avg'
        },
        {
          headerName: 'UEC',
          field: 'price_sell_maximum'
        }
      ]
    },
    {
      headerName: 'Profit',
      children: [
        {
          headerName: 'UEC',
          field: 'profitability_per_scu',
          valueFormatter: ({ value }) => Math.round(value).toString()
        },
        {
          headerName: 'Margin',
          field: 'profitability_relative_percentage',
          valueFormatter: ({ value }) => Math.round(value) + '%'
        }
      ]
    }
  ])

  const options = ref<GridOptions<UexCommodityRanking>>({
    groupHeaderHeight: 40,
    autoSizeStrategy: { type: 'fitCellContents' }
  })

  return {
    rowData: rankings,
    colDefs,
    options
  }
}
