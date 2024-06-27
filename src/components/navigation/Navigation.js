import Button from "../button/Button";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <img src="" alt="My website logo" />

      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
      </ul>
      <Button
        text="Join Niyo Family"
        buttonBackground="#fff"
        buttonColor="rgb(251, 175, 0)"
      />
    </nav>
  );
}

export default Navigation;
