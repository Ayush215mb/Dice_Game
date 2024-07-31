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

    @media (max-width: 768px) {
    margin-top: 40px;
    img {
      height: 200px;
      width: 200px;
    }

    p {
      font-size: 24px;
      margin-top: 20px;
    }
  }

  @media (max-width: 480px) {
    margin-top: 30px;

    img {
      height: 150px;
      width: 150px;
    }

    p {
      font-size: 20px;
      margin-top: 15px;
    }
  }
`;
