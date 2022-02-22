import { useState, useEffect } from "react";
import { GlobalStyle } from "../styles/globalStyles.js";
import { Map } from "./MapContainer/Map.jsx";
import {
  AppDiv,
  Button,
  Form,
  Info,
  InfoTitle,
  InfoValue,
  Input,
  LocationInfo,
  MapDiv,
  Title,
} from "./styles.js";

function App() {
  const [ipAddress, setIpAddress] = useState("192.212.174.101");
  const [country, setCountry] = useState("US");
  const [region, setRegion] = useState("California");
  const [timezone, setTimezone] = useState("-07:00");
  const [city, setCity] = useState("Mountain View");
  const [postalCode, setPostalCode] = useState("94043");
  const [isp, setIsp] = useState("Google LLC");
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
  //       setIsp(result.isp);
  //       setLatitude(result.location.lat);
  //       setLongitude(result.location.lng);
  //       setIpAddress(result.ip);
  //     });
  // }, [ipAddress]);

  function handleSubmit(event) {
    event.preventDefault();
    setIpAddress(event.target[0].value);
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
          defaultValue={ipAddress}
        ></Input>
        <Button type="submit">&gt;</Button>
      </Form>
      <MapDiv>
        <LocationInfo>
          <Info>
            <InfoTitle>Ip Address</InfoTitle>
            <InfoValue>{ipAddress}</InfoValue>
          </Info>
          <Info>
            <InfoTitle>Location</InfoTitle>
            <InfoValue>
              {city}, {region}, {country} {postalCode}
            </InfoValue>
          </Info>
          <Info>
            <InfoTitle>Timezone</InfoTitle>
            <InfoValue>UTC {timezone}</InfoValue>
          </Info>
          <Info>
            <InfoTitle>ISP</InfoTitle>
            <InfoValue>{isp}</InfoValue>
          </Info>
        </LocationInfo>
        <Map latitude={latitude} longitude={longitude} />
      </MapDiv>
    </AppDiv>
  );
}

export default App;
