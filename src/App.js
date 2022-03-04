import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./config/Routes";
import Header from "./components/Header";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes />
      </div>
    </Router>
  );
};

export default App;
