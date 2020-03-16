import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
const SUSHISURL = 'http://localhost:3000/sushis'


class SushiContainer extends React.Component {


  render() {
    return (
      <Fragment>
        <div className="belt">

        

          <MoreButton />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer