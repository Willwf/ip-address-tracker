import {
  AppDiv,
  Button,
  Info,
  InfoTitle,
  InfoValue,
  Input,
  InputField,
  LocationInfo,
  MapDiv,
  Title,
} from "./styles.js";

function App() {
  return (
    <AppDiv>
      <Title>IP Address Tracker</Title>
      <InputField>
        <Input placeholder="Search for any IP address or domain"></Input>
        <Button>&gt;</Button>
      </InputField>
      <MapDiv>
        <LocationInfo>
          <Info>
            <InfoTitle>Ip Adress</InfoTitle>
            <InfoValue>192.212.174.101</InfoValue>
          </Info>
          <Info>
            <InfoTitle>Location</InfoTitle>
            <InfoValue>Brooklyn, NY 10001</InfoValue>
          </Info>
          <Info>
            <InfoTitle>Timezone</InfoTitle>
            <InfoValue>UTC -05:00</InfoValue>
          </Info>
          <Info>
            <InfoTitle>ISP</InfoTitle>
            <InfoValue>SpaceX Starlink</InfoValue>
          </Info>
        </LocationInfo>
      </MapDiv>
    </AppDiv>
  );
}

export default App;
