import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./component/Loading";

const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const Company = lazy(() => import("./pages/Company"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route  path="/profile" element={<Profile />} />
          <Route  path="/company" element={<Company />} />
          <Route  path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
