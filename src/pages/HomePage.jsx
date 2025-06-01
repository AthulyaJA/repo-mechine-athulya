import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import NavScrollExample from "./NavBar";
import CountryList from "./List";
import { Button, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountriesStart,
  fetchCountriesSuccess,
  fetchCountriesFailure,
} from "./redux/countriesSlice";
import { useEffect, useState } from "react";
export default function HomePage() {
  const [tab, setTab] = useState(1);
  const dispatch = useDispatch();
  const { allCountries, status, error } = useSelector(
    (state) => state.countries
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchCountriesStart());
        const response = await fetch(
          "https://restcountries.com/v2/all?fields=name,region,flag"
        );
        const data = await response.json();
        dispatch(fetchCountriesSuccess(data));
      } catch (err) {
        dispatch(fetchCountriesFailure(err.message));
      }
    };

    if (status === "idle") {
      fetchData();
    }
  }, [dispatch, status]);
  console.log(allCountries, "allCountries");
  const [asia, setAis] = useState([]);
  const [europe, setEurope] = useState([]);
  useEffect(() => {
    if (tab === 2) {
      setAis(allCountries?.filter((country) => country.region === "Asia"));
    }
    if (tab === 3) {
      setEurope(allCountries?.filter((country) => country.region === "Europe"));
    }
  }, [tab]);
  return (
    <>
      <Container>
        {" "}
        <NavScrollExample tab={tab} setTab={setTab} />
        <p style={{ color: "#3D3D3D" }}><strong>Countries</strong></p>
        <div className="welcome-divider">
          <span className="welcome-text">WELCOME</span>
        </div>
        <div style={{ height: "800px", margin: "0 auto" }}>
          <AwesomeSlider style={{ height: "100%" }}>
            <div data-src="https://media.istockphoto.com/id/1225664036/photo/mother-and-son-in-bedroom-spend-some-quality-time.jpg?s=612x612&w=0&k=20&c=lO1I6sNyJHgWONh0g7JxQDt763IzDq5zYVooYOzmZgo=" />
            <div data-src="/path/to/image-2.jpg" />
          </AwesomeSlider>
        </div>
        <CountryList
          allCountries={
            tab === 1
              ? allCountries
              : tab === 2
              ? asia
              : tab === 3
              ? europe
              : []
          }
          status={status}
          error={error}
        />
        <div
          className="d-flex justify-content-center gap-4 mt-3"
          style={{ gap: "40px" }}
        >
          {["google", "facebook", "linkedin", "twitter"].map((platform) => (
            <Button
              key={platform}
              variant="outline-dark"
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "50px", height: "50px" }}
            >
              <i
                className={`fa fa-${
                  platform === "google" ? "google" : platform
                }`}
              ></i>
            </Button>
          ))}
        </div>
        <span
          className=" d-flex  align-items-center justify-content-center mt-5"
          style={{ color: "#3D3D3D" }}
        >
          <strong>example@gmail.com</strong>
        </span>
        <span
          className=" d-flex  align-items-center justify-content-center mt-2"
          style={{ color: "#3D3D3D" }}
        >
          <strong>Copyright © 2020 Name. All rights reserved.</strong>
        </span>
      </Container>
    </>
  );
}
