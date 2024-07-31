import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { Button, Outline_btn } from "../Styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [Score, setScore] = useState(0);

  const [Selectednumbr, setSelectednumbr] = useState();

  const [currentDice, setcurrentDice] = useState(1);

  const [error, seterror] = useState("");

  const [rules, setRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const DiceOutput = () => {
    if (!Selectednumbr) {
      seterror("You have not selected any Number");
      return;
    }

    seterror("");
    const randomnumber = generateRandomNumber(1, 7);

    setcurrentDice((prev) => randomnumber);

    if (Selectednumbr == randomnumber) {
      setScore((prev) => prev + Selectednumbr);
    } else {
      setScore((prev) => prev - 1);
    }

    setSelectednumbr(undefined);
  };

  const ResestScore = () => {
    setScore((prev) => 0);
  };

  const ShowRules = () => {
    setRules((prev) => !prev);
  };

  return (
    <MainContainer>
      <div className="top_cont">
        <TotalScore Score={Score} />
        <NumberSelector
          error={error}
          Selectednumbr={Selectednumbr}
          setSelectednumbr={setSelectednumbr}
        />
      </div>

      <RoleDice currentDice={currentDice} DiceOutput={DiceOutput} />

      <div className="Btns">
        <Button onClick={ResestScore}>Reset Score</Button>
        {rules ? (
          <Outline_btn onClick={ShowRules}>
            {rules ? `Hide rules` : `Show rules`}
          </Outline_btn>
        ) : (
          <Button onClick={ShowRules}>
            {rules ? `Hide rules` : `Show rules`}
          </Button>
        )}
      </div>

      <div className="Btns">{rules ? <Rules /> : <div></div>}</div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top_cont {
    display: flex;
    gap: 593px;
  }
  .Btns {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-block: 10px;
    gap: 10px;
  }

    @media (max-width: 768px) {
    .top_cont {
      flex-direction: column;
      gap: 20px;
    }

    .Btns {
      flex-direction: row;
      gap: 5px;
    }
  }

  @media (max-width: 480px) {
    .top_cont {
      gap: 10px;
    }

    .Btns {
      flex-direction: row;
      gap: 5px;
    }
  }
`;
