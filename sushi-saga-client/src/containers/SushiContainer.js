import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'
const SUSHISURL = 'http://localhost:3000/sushis'

class SushiContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sushis: [],
      startInd: 0
    };
  };
  
  componentDidMount() {
    fetch(SUSHISURL)
    .then(response => response.json())
    .then(sushisJSON => {
      let sushisArr = sushisJSON.map(sushi => {
        return (
          <Sushi name={sushi.name} img_url={sushi.img_url} price={sushi.price}/>
        )
      })
      this.setState({sushis: sushisArr})
    })
  }


  render() {
    return (
      <Fragment>
        <div className="belt">
            {console.log(this.state.sushis)}

            {this.state.sushis[this.state.startInd]}
            {this.state.sushis[this.state.startInd + 1]}
            {this.state.sushis[this.state.startInd + 2]}
            {this.state.sushis[this.state.startInd + 3]}
          <MoreButton />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer