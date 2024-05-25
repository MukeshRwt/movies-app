import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

import NavigationBar from "./components/NavigationBar";
import SingleMovie from "./SingleMovie";
import PageNotFound from "./PageNotFound";
import AppProvider from "./Context";

const App = () => {
  return (
    <>
      <AppProvider>
        <header>
          <NavigationBar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<SingleMovie />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <footer></footer>
      </AppProvider>
    </>
  );
};
export default App;
