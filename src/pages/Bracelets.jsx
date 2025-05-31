import React, { Component } from 'react';
import Items from '../components/Items/Items';
import item from "../bracelets.json"
import SimpleSlider from '../components/SimpleSlider/SimpleSlider';

export default class Braslets extends Component {
  render() {
    return (
      <div>
        <div>
          <SimpleSlider/>
        <Items item={item}/>
        </div>
      </div>
    )
  }
}
