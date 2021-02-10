import React, { useState } from "react";

import "./App.scss";
import "./Component/social-media.scss";

// import "./style.scss";
import Header from "./Component/Header";
// import LeftNav from "./Component/LeftNav";
import Listing from "./Component/Listing";
import Detail from "./Component/Detail";

function App() {
  const [isDetailState, setIsDetailState] = useState(false);

  function toggle() {
    setIsDetailState(!isDetailState);
  }

  return (
    <div className="site-wrapper">
      <Header />
      {isDetailState ? <Detail toggle={toggle} /> : <Listing toggle={toggle} />}
    </div>
  );
}

export default App;
