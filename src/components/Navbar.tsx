import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/shoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
        </Nav>
        <Button
          onClick={openCart}
          className="btn btn-link p-1"
          style={{ width: "5rem", height: "5rem", position: "relative" }}
        >
          <img
            className="p-1"
            style={{ width: "100%", height: "100%" }}
            src="src/components/bag.png"
            alt="my image"
          />
          <div
            className="rounded-circle bg-dark d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.6rem",
              height: "1.6rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(-30%, 0%)",
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}
