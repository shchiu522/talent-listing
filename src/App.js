import "./App.scss";
// import "./style.scss";
import Header from "./Component/Header";
// import LeftNav from "./Component/LeftNav";
import Listing from "./Component/Listing";

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <Listing />
    </div>
  );
}

export default App;
