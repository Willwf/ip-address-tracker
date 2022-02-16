import styled from "styled-components";
import * as colors from "../styles/variables";

export const AppDiv = styled.main`
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const Title = styled.h1`
  color: #fff;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
  font-size: 2.7rem;

  margin: 3vh 0;

  flex-grow: 0;
  flex-basis: auto;
`;

export const InputField = styled.div`
  width: 90vw;
  height: 8vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 80%;
  height: 100%;

  border: none;
  border-radius: 1.5rem 0 0 1.5rem;

  padding-left: 3rem;
  outline: none;

  font-size: 1.8rem;
  font-family: "Rubik", sans-serif;
  font-weight: 300;

  &::placeholder {
    color: ${colors.VeryDarkGray};
    font-size: 1.3rem;
    font-family: "Rubik", sans-serif;
    font-weight: 300;
  }
`;

export const Button = styled.button`
  width: 18%;
  height: 100%;

  border: none;
  border-radius: 0 1.5rem 1.5rem 0;

  background-color: #000;

  color: #fff;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  font-size: 2rem;

  &:hover {
    background-color: ${colors.VeryDarkGray};

    cursor: pointer;
  }

  &:active {
    opacity: 0.7;
  }
`;

export const MapDiv = styled.div`
  width: 100%;
  height: 35vh;

  margin-top: 24vh;

  position: relative;

  flex-grow: 1;
  flex-basis: auto;
`;

export const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh;

  padding: 2.5vh 0;

  background: #fff;

  width: 90%;
  border-radius: 1.5rem;

  position: absolute;
  top: -21vh;
  left: 0;
  right: 0;
  margin: auto;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoTitle = styled.h2`
  text-transform: uppercase;
  color: ${colors.DarkGray};
  font-size: 1.2rem;
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  letter-spacing: 0.2rem;

  margin: 1vh 0;
`;

export const InfoValue = styled.p`
  color: ${colors.VeryDarkGray};
  font-size: 2rem;
  font-family: "Rubik", sans-serif;
  font-weight: 700;
`;
