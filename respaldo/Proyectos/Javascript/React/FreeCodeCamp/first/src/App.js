import "./index.css";
import { data } from "./books";
import Book from "./Book";

function App() {
  const allBooks = data.map((book, index) => <Book key={index} {...book} />);
  return <section className="booklist">{allBooks}</section>;
}

export default App;
