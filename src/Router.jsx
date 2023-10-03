import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Home from "./components/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
