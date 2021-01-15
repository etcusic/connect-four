import React, { Component } from 'react'

class Token extends Component {

  constructor(props){
    super()
    this.state = {
      color: props.color
    }
  }



  render() {
    return (
      <div 
        className="token" 
        style={{backgroundColor: `${this.state.color}`}}
      ></div>
    )
  }

}
// const Token = ({ row, column, color }) => {
//   return <div className="token" style={{backgroundColor: `${color}`}}></div>
// }

export default Token