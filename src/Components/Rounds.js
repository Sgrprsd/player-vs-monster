const Rounds = (props) => {
  return (
    <ul>
      {props.rounds.map((round, index) => (
        <li
          key={index}
          className={
            round.isPlayer ? "round player-round" : " round monster-round"
          }
        >
          {round.text}
        </li>
      ))}
    </ul>
  );
};

export default Rounds;
