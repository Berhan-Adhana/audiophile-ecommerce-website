import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import "./css/styles.css";
import Category from "./pages/Category";
import Home from "./pages/Home.jsx";
import ProductSingle from "./pages/ProductSingle";
import Dashboard from "./components/Dashboard";
import { Provider } from "react-redux";
import store from "./app/Store";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import Checkout from "./pages/Checkout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/category/:name", element: <Category /> },
      { path: "/productdetails/:slug", element: <ProductSingle /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <Provider store={store}> */}
    <ApolloProvider client={client}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ApolloProvider>
    {/* </Provider> */}
  </>
);
