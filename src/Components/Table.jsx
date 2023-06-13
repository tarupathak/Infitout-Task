import React from 'react'
import TableContent from './TableContent'

const Table = () => {
  return (
    <div>
        <div id="flex-component">
            <div>CALLS</div>
            <div>PUTS</div>
        </div>
        <div>
            <TableContent />
        </div>
    </div>
  )
}

export default Table