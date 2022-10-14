import React from 'react'

export default function Filters(props) {
  let bgs = ['#ffc107','#0d6efd','#fd7e14','#dc3545','#198754']
  return (
    <div >
      {/* <hr /> */}
      <div className="my-4 collapse_">
        <h2 className='text-center my-4'><strong>Filters</strong></h2>

        <div className="filters">
            <div className="button button-1 my-2 mx-5" onClick={()=>{props.filter_("all")}}>All Tasks</div>
            <div className="button button-2 my-2 mx-5" onClick={()=>{props.filter_("done")}}>Completed Tasks</div>
            <div className="button button-3 my-2 mx-5" onClick={()=>{props.filter_("remaining")}}>Remaining Tasks</div>
            <div className="button button-9 my-2 mx-5" onClick={()=>{props.filter_("starred")}}>Starred Tasks</div>
        </div>
      </div>

    
    </div>
  )
}