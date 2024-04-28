import About from "./components/Page/About";
import Background from "./components/Page/Background";
import ContentWrapper from "./components/Page/Common/ContentWrapper";
import Experiences from "./components/Page/Experiences";
import Header from "./components/Page/Header";
import Intro from "./components/Page/Intro";
import "./style/main.scss";

function App() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Intro />
        <About />
      </ContentWrapper>
      <Background />
      <ContentWrapper>
        <Experiences />
      </ContentWrapper>
    </>
  );
}

export default App;
