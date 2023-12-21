/** @format */

import MainLayout from "./cors/components/mainLayout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
