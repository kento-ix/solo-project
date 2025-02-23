import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import Home from "./pages/HomePage";
import Layout from "./layouy/Layout";


const App = () => {
  return (
    <MantineProvider>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </Router>
      </Layout>
    </MantineProvider>
  );
}

export default App
