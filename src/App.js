import "./App.css";
import { Header } from "./header";
import Main from "./components/main";
import Form from "./components/form";
import { About } from "./components/about";
import Footer from "./components/footer";
function App() {
  return (
    <div className="container">
      <div className="app_container">
        <Header />
        <Main />
        <Form />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
