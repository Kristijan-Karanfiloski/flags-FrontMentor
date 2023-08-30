import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home page/HomePage.jsx";
// import FlagDetailsPage from "../pages/flag details/FlagDetailsPage.jsx";
import FlagCardDetails from "../components/flag card details/FlagCardDetails.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  // { path: "/cardDetails", element: <FlagDetailsPage /> },
  { path: "/:id", element: <FlagCardDetails /> },
]);

export default router;
