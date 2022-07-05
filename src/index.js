import { createRoot } from "react-dom/client";
import styled from "styled-components";
import { Footer, Header, Hero, Main } from "./components";
import { GlobalStyles } from "./utils/GlobalStyles";

const container = document.getElementById("root");
const root = createRoot(container);

const Layout = styled.div`
  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    place-items: center;
    gap: 5%;
  }
`;

root.render(
  <div style={{ maxWidth: "1024px", marginInline: "auto" }}>
    <GlobalStyles />
    <Header />
    <Layout>
      <Hero />
      <Main />
      <Footer />
    </Layout>
  </div>
);
