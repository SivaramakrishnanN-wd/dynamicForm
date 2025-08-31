import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import FormBuilder from "./views/FormBuilder";
import FormPreview from "./views/FormPreview";

function App() {
  return (
    <Router>
      <div className="p-4">
        {/* Simple navigation links */}
        <nav className="mb-4">
          <Link to="/builder" className="mr-4">Form Builder</Link>
          <Link to="/preview">Form Preview</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/builder" element={<FormBuilder />} />
          <Route path="/preview" element={<FormPreview />} />
          <Route path="*" element={<FormBuilder />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
