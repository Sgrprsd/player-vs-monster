const Player = (props) => {
  return (
    <div className="text-center">
      <label>
        {props.label}
        <input
          id={props.id}
          className="text-center"
          onChange={props.onChange}
          value={props.inputValue}
        />
      </label>
      <div
        className="healthbar"
        style={{
          backgroundColor: "green",
          margin: 0,
          color: "white",
          width: props.healthValue + "%",
        }}
      >
        {props.healthValue}
      </div>
    </div>
  );
};

export default Player;
