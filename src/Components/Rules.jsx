import styled from "styled-components";

const Rules = () => {
  return (
    <Rulescont>
      <h3>How to play dice game?</h3>
      <ul>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          After clicking on dice if selected number is equal to dice number you
          will get same point as dice
        </li>
        <li>if you get wrong guess then 2 point will be dedcuted</li>
      </ul>
    </Rulescont>
  );
};

export default Rules;

const Rulescont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color: #e99595;
  border-radius: 30px;
  margin-block: 30px;
  max-width: 500px;

  ul {
    padding: 10px;
  }
  li {
    padding-block: 5px;
  }
`;
