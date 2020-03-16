import React, { Fragment } from 'react'

const Table = (props) => {

  
  sushis = () => {
    fetch(SUSHISURL)
    .then(response => response.json())
    .then(sushisJSON => {
      let sushisArr = sushisJSON.map(sushi => {
        return (sushi)
      });
      console.log(sushisArr)
      return sushisArr
    }
  }

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ /* Give me how much money I have left */ } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates([])
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table