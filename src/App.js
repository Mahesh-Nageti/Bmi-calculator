import "./styles.css";
import { Header } from "./components/navbar";
import { BMICalculator } from "./components/bmi";
function App() {
  return (
    <div className="App">
      <Header />
      <BMICalculator />
    </div>
  );
}

export default App;
