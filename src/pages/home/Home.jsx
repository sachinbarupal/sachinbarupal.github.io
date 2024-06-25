import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import Coding from "../../containers/codingProfiles/Coding";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <Greeting />
      <Skills />
      <Coding />
      <Footer />
    </>
  );
}
