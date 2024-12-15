import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h2 className="pokedex-winner">Winning Player</h2>;
    } else {
      title = <h2 className="pokedex-loser">Losing Player</h2>;
    }
    return (
      <div className="pokedex">
        {title}
        <h4>Total Experinece: {this.props.exp}</h4>
        <div className="pokedex-cards">
          {this.props.pokemon.map((item) => (
            <Pokecard
              id={item.id}
              name={item.name}
              type={item.type}
              exp={item.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
