import { Container } from "./components/UI/Layout";
import { ToastMessage } from "./components/UI";
import About from "./components/Page/About";
import Background from "./components/Page/Background";
import ContentWrapper from "./components/Page/Common/ContentWrapper";
import Contact from "./components/Page/Contact";
import Experiences from "./components/Page/Experiences";
import Header from "./components/Page/Header";
import Intro from "./components/Page/Intro";
import Projects from "./components/Page/Projects";
import ScrollUpButton from "./components/Page/ScrollUpButton";
import "./style/main.scss";

function App() {
  return (
    <Container style={{ overflowX: "hidden" }}>
      <Header />

      <ContentWrapper>
        <Intro />
        <About />
      </ContentWrapper>

      <Background />

      <ContentWrapper>
        <Experiences />
        <Projects />
      </ContentWrapper>
      
      <Contact />

      <ToastMessage />
      <ScrollUpButton />
    </Container>
  );
}

export default App;
