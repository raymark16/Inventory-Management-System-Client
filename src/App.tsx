import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import useAuth from "./hooks/useAuth";
import Loading from "./components/Loading";

//Lazy load
const LayoutComponent = lazy(() => import("./components/LayoutComponent"));
const PrivateRoutes = lazy(() => import("./components/PrivateRoutes"));
const ErrorPage = lazy(() => import("./pages/Error"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AddProduct = lazy(() => import("./pages/AddProduct"));
const Profile = lazy(() => import("./pages/Profile"));
const UpdateProfile = lazy(() => import("./pages/UpdateProfile"));
const ChangePassword = lazy(() => import("./pages/ChangePassword"));
const ReportBug = lazy(() => import("./pages/ReportBug"));
export const URLi = "http://localhost:5000";

const App = () => {
  const { auth } = useAuth();
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: "1.5rem",
          },
        }}
      ></Toaster>
      <Routes>
        <Route
          path="/register"
          element={
            auth ? (
              <Navigate to="/" />
            ) : auth === undefined ? (
              <Loading />
            ) : (
              <Register />
            )
          }
        />
        <Route
          path="/login"
          element={
            auth ? (
              <Navigate to="/" />
            ) : auth === undefined ? (
              <Loading />
            ) : (
              <Login />
            )
          }
        />

        <Route
          element={
            <Suspense fallback={<Loading />}>
              <PrivateRoutes />
            </Suspense>
          }
        >
          <Route
            element={
              <Suspense fallback={<Loading />}>
                <LayoutComponent />
              </Suspense>
            }
          >
            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route
              path="/add-product"
              element={
                <Suspense fallback={<Loading />}>
                  <AddProduct />
                </Suspense>
              }
            />
            <Route
              path="/profile"
              element={
                <Suspense fallback={<Loading />}>
                  <Profile />
                </Suspense>
              }
            />
            <Route
              path="/update-profile"
              element={
                <Suspense fallback={<Loading />}>
                  <UpdateProfile />
                </Suspense>
              }
            />
            <Route
              path="/change-password"
              element={
                <Suspense fallback={<Loading />}>
                  <ChangePassword />
                </Suspense>
              }
            />
            <Route
              path="/report-bug"
              element={
                <Suspense fallback={<Loading />}>
                  <ReportBug />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <ErrorPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
