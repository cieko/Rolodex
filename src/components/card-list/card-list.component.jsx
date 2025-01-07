import { Component } from "react";

import './card-list.styles.css';

class CardList extends Component {

  render() {
    const { monsters } = this.props

    return (
      <div className="card-list">
        {monsters.map((monster, index) => {
          const { name, email } = monster
          return (
            <div key={index} className="card-container">
              <img src={`https://robohash.org/${index}?set=set2&size=180x180`} alt={`Monster ${name}`} />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default CardList