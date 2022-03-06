import { useState, useEffect } from "react";
import { GlobalStyle } from "../styles/globalStyles.js";
import { Map } from "./MapContainer/Map.jsx";
import * as styles from "./styles.js";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [inputValue, setInputValue] = useState("");

  const [ipAddress, setIpAddress] = useState("");
  const [isp, setIsp] = useState("");

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [timezone, setTimezone] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [latitude, setLatitude] = useState(37.40599);
  const [longitude, setLongitude] = useState(-122.078514);

  useEffect(() => {
    fetch(
      ipAddress
        ? `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`
        : `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
    )
      .then((response) => response.json())
      .then((result) => {
        setCountry(result.location.country);
        setRegion(result.location.region);
        setTimezone(result.location.timezone);
        setCity(result.location.city);
        setPostalCode(result.location.postalCode);
        setLatitude(result.location.lat);
        setLongitude(result.location.lng);

        setIsp(result.isp);
        setIpAddress(result.ip);
        setInputValue(result.ip);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (event.target[0].value) {
      setIpAddress(event.target[0].value);
      setInputValue(event.target[0].value);

      fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${event.target[0].value}`
      )
        .then((response) => response.json())
        .then((result) => {
          setCountry(result.location.country);
          setRegion(result.location.region);
          setTimezone(result.location.timezone);
          setCity(result.location.city);
          setPostalCode(result.location.postalCode);
          setLatitude(result.location.lat);
          setLongitude(result.location.lng);

          setIsp(result.isp);
        });
    }
  }

  function inputFormater(event) {
    setInputValue(event.target.value);
  }

  return (
    <styles.AppDiv>
      <GlobalStyle />
      <styles.Title>IP Address Tracker</styles.Title>
      <styles.Form onSubmit={handleSubmit}>
        <styles.Input
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
        ></styles.Input>
        <styles.Button type="submit">&gt;</styles.Button>
      </styles.Form>
      <styles.MapDiv>
        <styles.LocationInfoCard>
          <styles.InfoSection>
            <styles.InfoTitle>Ip Address</styles.InfoTitle>
            <styles.InfoValue>{ipAddress}</styles.InfoValue>
          </styles.InfoSection>
          <styles.InfoSection>
            <styles.InfoTitle>Location</styles.InfoTitle>
            <styles.InfoValue>
              {city}, {region}, {country} {postalCode}
            </styles.InfoValue>
          </styles.InfoSection>
          <styles.InfoSection>
            <styles.InfoTitle>Timezone</styles.InfoTitle>
            <styles.InfoValue>UTC {timezone}</styles.InfoValue>
          </styles.InfoSection>
          <styles.InfoSection>
            <styles.InfoTitle>ISP</styles.InfoTitle>
            <styles.InfoValue>{isp}</styles.InfoValue>
          </styles.InfoSection>
        </styles.LocationInfoCard>
        <Map latitude={latitude} longitude={longitude} />
      </styles.MapDiv>
    </styles.AppDiv>
  );
}

export default App;
