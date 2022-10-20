import React from 'react'
import './ListFiles.css'
const ListFiles = ({ InfoTests }) => {
    return (
        <>
            <div className='list list_titles'>
                <div className='list__font'><b>File Name</b></div>
                <div className='list__font'><b>Test</b></div>
                <div className='list__font'><b>Number</b></div>
                <div className='list__font'><b>Hex</b></div>
            </div>
            <div className='list list_grid'>
                {InfoTests?.map((f, i) => {
                    let line = f.lines[0]
                    let inpar = false
                    if(i % 2 != 0){
                        inpar = true
                    }
                    return (
                        <>
                            <div className={inpar ? 'bgGray list__font' : 'list__font'}><p>{f.file}</p> </div>
                            <div className={inpar ? 'bgGray list__font' : 'list__font'}><p>{line.text}</p></div>
                            <div className={inpar ? 'bgGray list__font' : 'list__font'}><p>{line.number}</p></div>
                            <div className={inpar ? 'bgGray list__font' : 'list__font'}><p>{line.hex}</p></div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default ListFiles