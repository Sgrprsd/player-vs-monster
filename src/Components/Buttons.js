import Button from "./Button";

const Buttons = (props) => {
  return (
    <div className="buttons">
      <Button color="#ff3f43" onClick={props.onAttack} text="Attack" />
      <Button
        color="#ff9a2b"
        disabled={props.maxSpecialAttacks === 3}
        onClick={props.onSpecialAttack}
        text="Special Attack"
      />
      <Button
        color="#76ff7e"
        disabled={props.maxHealings === 5}
        onClick={props.onHeal}
        text="Heal"
      />
      <Button color="#c7c7c7" onClick={props.onGiveUp} text="Give up" />
    </div>
  );
};

export default Buttons;
