import Navbar from "./components/navbar/Navbar";
import "./main_styles/layout.scss";
import HomePage from "./routes/home-page/HomePage";
function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
