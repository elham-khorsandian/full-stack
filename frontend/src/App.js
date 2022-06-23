import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CourseList from "./Components/CourseList/CourseList";
import CourseDetails from "./Components/CourseDetails/CourseDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h2>_Courseology</h2>
        </header>
        <Routes>
          <Route path="/" element={<CourseList />}></Route>

          <Route path="/course/:id" element={<CourseDetails />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
