import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          {AppRoutes.filter((i) => i.loadable).map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <route.component />
                </Suspense>
              }
            />
          ))}

          <Route index element={<Navigate to="/home" replace />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
