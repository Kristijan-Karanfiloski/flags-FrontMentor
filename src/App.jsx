// import "./App.css";
// import Header from "./components/header/Header.jsx";
// import HomePage from "./pages/home page/HomePage.jsx";
//
// function App() {
//   return (
//     <>
//       <Header />
//       {/*/!*<HomePage />*!/*/}
//     </>
//   );
// }
//
// export default App;

import { RouterProvider } from "react-router-dom";
import router from "./utils/routes.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
