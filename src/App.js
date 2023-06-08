import { Route, Routes } from "react-router-dom";
import DetailsPage from "./Pages/DetailsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
