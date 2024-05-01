import { Container } from "./components/UI/Layout";
import About from "./components/Page/About";
import Background from "./components/Page/Background";
import ContentWrapper from "./components/Page/Common/ContentWrapper";
import Contact from "./components/Page/Contact";
import Experiences from "./components/Page/Experiences";
import Header from "./components/Page/Header";
import Intro from "./components/Page/Intro";
import Projects from "./components/Page/Projects";
import "./style/main.scss";

function App() {
  return (
    <Container>
      <Header />
      <ContentWrapper>
        <Intro />
        <About />
      </ContentWrapper>
      <Background />
      <ContentWrapper>
        <Experiences />
        <Projects />
        <Contact />
      </ContentWrapper>
    </Container>
  );
}

export default App;
