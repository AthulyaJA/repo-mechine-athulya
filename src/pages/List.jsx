import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountriesStart,
  fetchCountriesSuccess,
  fetchCountriesFailure,
} from "./redux/countriesSlice";
import { Button } from "react-bootstrap";
import { Col } from "reactstrap";

export default function CountryList({ allCountries, status, error }) {
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedRegion, setSelectedRegion] = useState("All");

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    setVisibleCount(12);
  };

  const filteredCountries =
    selectedRegion === "All"
      ? allCountries
      : allCountries.filter((c) => c.region === selectedRegion);

  const visibleCountries = filteredCountries?.slice(0, visibleCount);

  if (status === "loading") return <p>Loading countries...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }} className="mt-5">
     

      <div className="row">
        {visibleCountries?.map((country) => (
          <Col lg={6} className="mt-2">
            {" "}
            <div
              key={country.name}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <img
                src={country.flag}
                alt={country.name}
                style={{ width: "60px", height: "40px", objectFit: "cover" }}
              />
              <div>
                <h4 style={{ margin: 0 }}>{country.name}</h4>
                <p style={{ margin: 0, color: "#666" }}>{country.region}</p>
              </div>
            </div>
          </Col>
        ))}
      </div>

      {visibleCount < filteredCountries?.length && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Button
            onClick={handleLoadMore}
            variant="dark"
            type="submit"
            className="w-10 mb-3"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
