import Player from "./Player";

const Players = (props) => {
      return (
        <section className="row">
          <Player
            id="playerName"
            label="Your name:"
            healthValue={props.playerHealth}
            onChange={props.onNameChange}
            inputValue={props.playerName}
          />
          <Player
            id="monsterName"
            label="Monster name:"
            healthValue={props.monsterHealth}
            onChange={props.onNameChange}
            inputValue={props.monsterName}
          />
        </section>
      );
    }

export default Players;