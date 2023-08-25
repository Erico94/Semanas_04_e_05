import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { ToDo } from "../pages/ToDo/ToDo";
import { ErrorPage } from "../pages/error/ErrorPage";
import { AppLayout } from "../layouts/AppLayout";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/todo/:id" element={<ToDo />} />
        </Route>
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
