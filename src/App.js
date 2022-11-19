import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import Letter from "./pages/letter";
import Payment from "./pages/payment";
import Certificate from "./pages/certificate";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/jobs" element={<Jobs />}></Route>
        <Route exact path="/payment" element={<Payment />}></Route>
        <Route exact path="/letter" element={<Letter />}></Route>
        <Route exact path="/certificate" element={<Certificate />}></Route>
      </Routes>
    </Router>
  );
}
