import styled from "styled-components";

const RoleDice = ({ currentDice, DiceOutput }) => {
  return (
    <DiceCont>
      <div className="Dice" onClick={DiceOutput}>
        <img src={`/Images/dice_${currentDice}.png`} alt="dice-1" />
      </div>

      <p>Click on the dice to Roll</p>
    </DiceCont>
  );
};

export default RoleDice;

const DiceCont = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .Dice {
    cursor: pointer;
  }

  p {
    font-size: 30px;
    margin-top: 30px;
    font-weight: 600;
  }
`;
