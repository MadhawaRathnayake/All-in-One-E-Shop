import { createBrowserRouter, RouterProvider } from "react-router-dom";
import customRouter from "./router";

const router = createBrowserRouter(customRouter);

export default function App() {
  return <RouterProvider router={router} />;
}