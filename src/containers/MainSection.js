import React, { Component } from 'react'
import HomeCard from '../components/HomeCard'

export class MainSection extends Component {
  
  render() {
    return (
      <section className="col s10">
        <HomeCard />
      </section>
    )
  }
}

export default MainSection