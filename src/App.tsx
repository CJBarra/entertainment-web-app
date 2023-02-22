import './styles/index.css'
import api from "@/data.json";

function App() {
  return (
    <div className="App">
      <h1>Vite + React</h1>

      <div className="img__grid">
        {api.map((record, i) => (
          <div className="grid__item" key={i}>
            <picture className="item__img">
              <source media="(min-width: 900px)" srcSet={record.thumbnail["regular"]?.large} type="image/jpeg"  />
              <source media="(min-width: 600px)" srcSet={record.thumbnail["regular"]?.medium} type="image/jpeg" />
              <img src={record.thumbnail["regular"]?.small} alt={record.title} />
            </picture>
            <h4 className="item__title">{record.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
