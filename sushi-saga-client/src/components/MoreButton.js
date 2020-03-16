import React from 'react'

class MoreButton extends React.Component {
    render() {
      return( <button onClick={this.props.onClickHandler}>
              More sushi!
            </button>
      )
    }
}

export default MoreButton