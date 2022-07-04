import { createRoot } from "react-dom/client";
import { Footer, Header, Hero, Main } from "./components";
import { GlobalStyles } from "./utils/GlobalStyles";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div>
    <GlobalStyles />
    <Header />
    <Hero />
    <Main />
    <Footer />
  </div>
);
