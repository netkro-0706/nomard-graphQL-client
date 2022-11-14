import { BrowserRouter, Routes, Route } from "react-router-dom"
import Movie from "./routers/Movie";
import Movies from "./routers/Movies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/Movies/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}