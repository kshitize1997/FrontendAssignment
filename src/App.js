import Card from "./Components/Card/Card";
import CardList from "./Components/CardList/CardList";

function App() {
  return (
    <div className="App">
      <div className="p-5 text-center bg-light">
          <h1 className="mb-3">Posts</h1>
      </div>
      <CardList/>
    </div>
  );
}

export default App;
