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
          <Sushi name={sushi.name} img_url={sushi.img_url} price={sushi.price} onClickSubtract={this.props.onClickSubtract}/>
        )
      })
      this.setState({sushis: sushisArr})
    })
  }

  onClickHandler = () => {
    let newInd = this.state.startInd + 4
    this.setState({startInd: newInd})
    console.log(`NEW START IND IS: ${this.state.startInd}`)
  }


  render() {
    return (
      <Fragment>
        <div className="belt">

            {this.state.sushis[this.state.startInd]}
            {this.state.sushis[this.state.startInd + 1]}
            {this.state.sushis[this.state.startInd + 2]}
            {this.state.sushis[this.state.startInd + 3]}
          <MoreButton onClickHandler={this.onClickHandler}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer