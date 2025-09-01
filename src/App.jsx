import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import FormBuilder from "./views/FormBuilder";
import FormPreview from "./views/FormPreview";
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <div className="p-4">
        <Routes>
          <Route path="*" element={<Home />}>
            <Route path="builder" element={<FormBuilder />} />
            <Route path="preview" element={<FormPreview />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
