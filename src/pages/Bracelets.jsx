import React, { Component } from 'react';
import Items from '../components/Items/Items';
import item from "../item.json"

export default class Braslets extends Component {
  render() {
    return (
      <div>
        <div>
        <Items item={item}/>
        </div>
      </div>
    )
  }
}
