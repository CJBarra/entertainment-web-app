import api from "@/api/v1/data.json";
import { GridItem, GridLayout } from "./components";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <GridLayout>
        {api &&
          api.map((record, i) => (
            <GridItem
              id={i}
              path={record}
              thumbType={"regular"}
              key={record.year + "_" + record.title}
            />
          ))}
      </GridLayout>
    </div>
  );
}

export default App;
