import About from "./components/Page/About";
import ContentWrapper from "./components/Page/Common/ContentWrapper";
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
    </>
  );
}

export default App;
