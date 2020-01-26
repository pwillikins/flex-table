import { Component, Input, AfterViewInit } from '@angular/core';
const arrowKeys = [
  'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight' 
]

@Component({
  selector: 'flex-table',
  templateUrl: './flextable.component.html',
  styleUrls: ['./flextable.component.scss']
})

export class FlexTableComponent implements AfterViewInit {
  @Input() columns: any[]
  @Input() data: any[]
  @Input() width: string
  @Input() height: string

  selectedCellId: string
  currSelectedCell: any

  ngAfterViewInit() {
    this.setClickEventListeners()
    this.setKeyPressListeners()
  }

  /**
   * Sets listeners for click events
   */
  setClickEventListeners() {
    this.columns.forEach((col, index) => {
      document.getElementById(`table-header-${index}`).addEventListener("click", (event) => {
        console.log('clicking the header!', event)
      })
    })

    this.data.forEach((row, rowIndex) => {
      this.columns.forEach((col, index) => {
        document.getElementById(`table-cell-${rowIndex}-${index}`).addEventListener("click", (event) => {
          const currSelectedCell = document.getElementById(this.selectedCellId)
          const selectedCellId = event.target['id']

          if (currSelectedCell && this.selectedCellId !== selectedCellId) {
            currSelectedCell.className = ''
          }

          this.selectedCellId = selectedCellId
          this.currSelectedCell = document.getElementById(this.selectedCellId)
          event.target['className'] = 'highlighted'
        })

      })
    })

  }

  /**
   * Sets key press listeners
   */
  setKeyPressListeners() {
    document.addEventListener("keydown", (event) => {
      if (arrowKeys.includes(event.code) && this.currSelectedCell) {
        const rowIndex = Number(this.currSelectedCell['dataset']['rowId'])
        const colIndex = Number(this.currSelectedCell['dataset']['columnId'])
        let nextCellId

        if (event.code === 'ArrowUp') {
          // there is a row above the current cell selected
          // so we can navigate up to the cell above
          if (rowIndex > 0) {
            nextCellId = `table-cell-${rowIndex - 1}-${colIndex}`
          } else {
            // there is no row above the current selected row
            if (colIndex > 0) {
              // there is a cell to the left of the one selected
              nextCellId = `table-cell-${this.data.length - 1}-${colIndex - 1}`
            } else {
              // there is no cell to the left of the one selected
              nextCellId = `table-cell-${this.data.length - 1}-${this.columns.length - 1}`
            }
          }
        } else if (event.code === 'ArrowDown') {
          // if current row is not the bottom row
          if (rowIndex < (this.data.length - 1)) {
            nextCellId = `table-cell-${rowIndex + 1}-${colIndex}`
          } else {
            if (colIndex < (this.columns.length - 1)) {
              // we can navigate to the right in the first row
              nextCellId = `table-cell-0-${colIndex + 1}`
            } else {
              nextCellId = 'table-cell-0-0'
            }
          }
        } else if (event.code === 'ArrowLeft') {
          if (colIndex > 0) {
            nextCellId = `table-cell-${rowIndex}-${colIndex - 1}`
          } else {
            if (rowIndex > 0) {
              nextCellId = `table-cell-${rowIndex - 1}-${this.columns.length - 1}`
            } else {
              nextCellId = `table-cell-${this.data.length - 1}-${this.columns.length - 1}`
            }
          }
        } else if (event.code === 'ArrowRight') {
          if (colIndex < (this.columns.length - 1)) {
            nextCellId = `table-cell-${rowIndex}-${colIndex + 1}`
          } else {
            if (rowIndex < (this.data.length - 1)) {
              nextCellId = `table-cell-${rowIndex + 1}-0`
            } else {
              nextCellId = 'table-cell-0-0'
            }
          }
        }

        const nextCell = document.getElementById(nextCellId)
        if (nextCell) {
          this.currSelectedCell.className = ''
          nextCell.className = 'highlighted'
          this.currSelectedCell = nextCell
          this.selectedCellId = nextCell['id']
        }
      }
    })
  }

  updateEvent(event) {
    console.log('event -->', event)
  }
}
