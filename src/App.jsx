import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CitiesProvider } from "./Context/CitiesContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import { AuthProvider } from "./Context/FakeAuthContext";

import CityList from "./Components/CityList";
import CountryList from "./Components/CountryList";
import City from "./Components/City";
import Form from "./Components/Form";
import SpinnerFullPage from "./Components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/HomePage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

const Homepage = lazy(() => import("./pages/HomePage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// dist/assets/index-08944db0.css   29.96 kB │ gzip:   5.06 kB
// dist/assets/index-ea3ca122.js   513.13 kB │ gzip: 147.78 kB

//🌍 Excited to share my latest project: a dynamic and interactive web application built using React!

//🗺️ Experience the world like never before with my World Wise Web application. Seamlessly navigate through a beautiful world map that tracks your footsteps into every city imaginable. Never forget your incredible experiences as you explore new places and cultures, and easily share your adventures with friends and family.

//🔐 Utilizing React Router DOM for seamless navigation, I've integrated fake user authentication to personalize the experience. With the power of React Context API, I've efficiently managed state across the application, ensuring a smooth and responsive user experience.

//💻 Behind the scenes, I've leveraged local JSON arrays to simulate HTTP POST requests to the server, enabling users to save and retrieve their travel experiences effortlessly.
//Under the hood, I've harnessed the power of Leaflet to create dynamic and responsive maps,

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="Pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
