import styled from 'styled-components';

export const AppContainer = styled.div`
  background-image: linear-gradient(
    120deg,
    rgb(250, 195, 72),
    rgb(250, 180, 26)
  );
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppWrapper = styled.div`
  background-color: #292f38;
  width: 25%;
  min-width: 450px;
  height: 600px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin-bottom: 50px;
  width: 100%;
`;
