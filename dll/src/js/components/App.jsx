import React, { useState } from "react";
import data from "../../data.json";
import Loader from "./Loader.jsx";
import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";
import "../../less/less.less";
import "../../sass/sass.scss";
import "../../stylus/stylus.styl";

const App = () => {
  const [loaders, setLoaders] = useState([]);

  const handleOnClick = () => {
    console.log(data.loaders);
    setLoaders(data.loaders);
  };

  return (
    <div>
      <p>Webpack</p>
      <p className='less'>Less</p>
      <p className='sass'>Sass</p>
      <p className='stylus'>Stylus</p>
      <p className='post-css'>Postcss</p>
      <p>
        <video src={video} width={360} controls poster={logo} />
      </p>
      <p>
        <img src={logo} alt='logo' width={40} />
      </p>
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
