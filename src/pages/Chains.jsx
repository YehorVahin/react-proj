import React, { Component } from 'react'
import Items from '../components/Items/Items'
import chains from '../chains.json'
import SimpleSlider from '../components/SimpleSlider/SimpleSlider'

export default class Chains extends Component {
  render() {
    return (
      <div>
        <SimpleSlider/>
        <Items item={chains}/>
      </div>
    )
  }
}
