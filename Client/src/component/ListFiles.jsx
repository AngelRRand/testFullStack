import React from 'react'
import './ListFiles.css'
const ListFiles = ({InfoTests}) => {
  return (
    <div className='list_grid'>
        {InfoTests?.map(f => {
            return(
              <h2>{f.file}</h2>
            )
          })}
    </div>
  )
}

export default ListFiles