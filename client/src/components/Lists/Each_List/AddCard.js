import React from 'react';
import { AddCardText } from './EachListCSS'

class AddCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      clicked: false
    }
  }

  onClickHandler = () => {
    this.setState({ clicked: true })
  }

  render() {
    const { clicked } = this.state
    if (clicked) {
      return (
        <div> This is the Form </div>
      )
    }
    return (
      <AddCardText
      onClick={this.onClickHandler}
      onMouseEnter={() => this.setState({ hovered: true }) }
      onMouseLeave={() => this.setState({ hovered: false })}
      style={this.state.hovered ? { backgroundColor: 'ivory' } : null}
      >
       <span><i className="plus icon"></i></span>
       <span>Add Card</span>
     </AddCardText>
    )
  }
}

export default AddCard