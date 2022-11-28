import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Shows from "./pages/shows";
import Form from "./pages/shows/[id]";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shows" element={<Shows />} />
          <Route
            path="/shows/:id"
            loader={({ params }) => {
              console.log(params.id);
            }}
            action={({ params }) => {}}
            element={<Form />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
