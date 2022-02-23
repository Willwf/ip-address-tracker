import { useState, useEffect } from "react";
import { GlobalStyle } from "../styles/globalStyles.js";
import { Map } from "./MapContainer/Map.jsx";
import {
  AppDiv,
  Button,
  Form,
  InfoSection,
  InfoTitle,
  InfoValue,
  Input,
  LocationInfoCard,
  MapDiv,
  Title,
} from "./styles.js";

function App() {
  const [inputValue, setInputValue] = useState("192.212.174.101");

  const [ipAddress, setIpAddress] = useState("192.212.174.101");
  const [isp, setIsp] = useState("Google LLC");

  const [country, setCountry] = useState("US");
  const [region, setRegion] = useState("California");
  const [timezone, setTimezone] = useState("-07:00");
  const [city, setCity] = useState("Mountain View");
  const [postalCode, setPostalCode] = useState("94043");
  const [latitude, setLatitude] = useState(37.40599);
  const [longitude, setLongitude] = useState(-122.078514);

  // useEffect(() => {
  //   fetch(
  //     ipAddress
  //       ? `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`
  //       : `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);

  //       setCountry(result.location.country);
  //       setRegion(result.location.region);
  //       setTimezone(result.location.timezone);
  //       setCity(result.location.city);
  //       setPostalCode(result.location.postalCode);
  //       setLatitude(result.location.lat);
  //       setLongitude(result.location.lng);

  //       setIsp(result.isp);
  //       setIpAddress(result.ip);
  //     });
  // }, [ipAddress]);

  function handleSubmit(event) {
    event.preventDefault();
    if (event.target[0].value) {
      setIpAddress(event.target[0].value);
      setInputValue(event.target[0].value);
    }
  }

  function inputFormater(event) {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }

  return (
    <AppDiv>
      <GlobalStyle />
      <Title>IP Address Tracker</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="ipAddress"
          placeholder="Search for any IP address or domain"
          value={inputValue}
          onChange={inputFormater}
          minlength="7"
          maxLength="15"
          size="15"
          pattern="^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$"
          title="x.x.x.x with x being from 1 to 255"
        ></Input>
        <Button type="submit">&gt;</Button>
      </Form>
      <MapDiv>
        <LocationInfoCard>
          <InfoSection>
            <InfoTitle>Ip Address</InfoTitle>
            <InfoValue>{ipAddress}</InfoValue>
          </InfoSection>
          <InfoSection>
            <InfoTitle>Location</InfoTitle>
            <InfoValue>
              {city}, {region}, {country} {postalCode}
            </InfoValue>
          </InfoSection>
          <InfoSection>
            <InfoTitle>Timezone</InfoTitle>
            <InfoValue>UTC {timezone}</InfoValue>
          </InfoSection>
          <InfoSection>
            <InfoTitle>ISP</InfoTitle>
            <InfoValue>{isp}</InfoValue>
          </InfoSection>
        </LocationInfoCard>
        <Map latitude={latitude} longitude={longitude} />
      </MapDiv>
    </AppDiv>
  );
}

export default App;
