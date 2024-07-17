import styled from "styled-components";
import { Button } from "../Styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <Image src="/Images/homepageIMG.png" />
      </div>

      <div className="content">
        <h1>Dice Game</h1>

        <Button onClick={toggle}>PLAY NOW</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  height: 100vh;
  margin: 0px auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      font-weight: 700;
      white-space: nowrap;
    }
  }
`;

const Image = styled.img`
  width: 649px;
  height: 522px;
`;
