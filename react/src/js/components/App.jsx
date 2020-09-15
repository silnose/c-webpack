import React, { useState } from "react";
import data from "../../data.json";
import Loader from "./Loader.jsx";

const App = () => {
  const [loaders, setLoaders] = useState([]);

  const handleOnClick = () => {
    console.log(data.loaders);
    setLoaders(data.loaders);
  };

  return (
    <div>
      <button onClick={handleOnClick}>Show me!</button>
      <ul>
        {loaders.map((item) => (
          <Loader {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default App;
