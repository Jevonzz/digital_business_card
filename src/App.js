import { About, Footer, Info, Interests } from "./components";
import "./App.css";

const App = () => (
  <section className="container">
    <div className="main">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  </section>
);

export default App;
