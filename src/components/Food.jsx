import React from 'react'
import {data} from '../data/data'
const Food = () => {
  return (
    <div>
        <h1>Top Rated Menus</h1>
        {/* {c} */}
        <div>
          <p>Filter With Category</p>
          <div>
            <button>ALL</button>
            <button>Burgers</button>
            <button>Pizza</button>
            <button>Salads</button>
            <button>Chicken</button>
          </div>
        </div>
        <div>
            <p>Filter with Price</p>
        </div>
    </div>
  )
}

export default Food