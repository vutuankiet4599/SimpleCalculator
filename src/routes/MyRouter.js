import { Routes, Route, HashRouter } from "react-router-dom";
import App from "../components/App";
import NoPage from "../components/NoPage";
const MyRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  );
};

export default MyRouter;
