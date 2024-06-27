import BookList from "./components/booklist/BookList";
import Button from "./components/button/Button";
import Navigation from "./components/navigation/Navigation";
import Welcome from "./components/welcome/Welcome";

const name = "Beryl";
const hasUser = false;

function App() {
  if (hasUser) {
    return <h3>{name} is a user here</h3>;
  }
  return (
    <div>
      <Navigation />
      <Welcome nameProps={name} />
      <BookList name="Sakirat Usman" />
      <BookList name="Chantal" />
      <Button
        text="View Bootcamps"
        buttonBackground="rgb(251, 175, 0)"
        buttonColor="#fff"
      />
      <br />
      <br />
      <Button
        text="Partner with us"
        buttonBackground="rgb(251, 175, 0)"
        buttonColor="#fff"
      />
    </div>
  );
}

export default App;
