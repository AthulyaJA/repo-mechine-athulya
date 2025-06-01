import Nav from "react-bootstrap/Nav";

function NavScrollExample({ tab, setTab }) {
  return (
    <Nav
      className="justify-content-end"
      activeKey={tab.toString()} // Use string values for eventKey matching
    >
      <Nav.Item>
        <Nav.Link
          eventKey="1"
          onClick={(e) => {
            e.preventDefault();
            setTab(1);
          }}
        >
          <p style={{ color: "#3D3D3D" }}>
            <strong>All</strong>
          </p>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="2"
          onClick={(e) => {
            e.preventDefault();
            setTab(2);
          }}
        >
          <p style={{ color: "#3D3D3D" }}>
            <strong>Asia</strong>
          </p>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="3"
          onClick={(e) => {
            e.preventDefault();
            setTab(3);
          }}
        >
          <p style={{ color: "#3D3D3D" }}>
            <strong>Europe</strong>
          </p>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavScrollExample;
