import "./App.scss";
// import "./style.scss";
import Header from "./Component/Header";
// import LeftNav from "./Component/LeftNav";
import Listing from "./Component/Listing";
import Detail from "./Component/Detail";

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      {/* <Listing /> */}
      <Detail />
    </div>
  );
}

export default App;
