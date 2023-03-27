// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }
  render() {
    const {count} = this.setState
    return (
      <div>
        <h1>
          Bob eat {count} mangoes {count} bananas
        </h1>
        <img
          src="
https://assets.ccbp.in/frontend/react-js/mango-img.png"
          alt="mango"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
          alt="banana"
        />
        <button onClick={this.onIncrement}>Eat Mango</button>
        <button onClick={this.onDecrement}>Eat Banana</button>
      </div>
    )
  }
}

export default FruitsCounter
