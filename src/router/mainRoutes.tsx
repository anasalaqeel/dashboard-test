import { Routes, Route } from "react-router-dom";
import Initiatives from "../components/initiatives";
import Kpis from "../components/kpis";
import Overview from "../components/overview";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="kpis" element={<Kpis />} />
          <Route path="initiatives" element={<Initiatives />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default MainRoutes;
