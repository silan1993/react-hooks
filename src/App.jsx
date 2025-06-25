import { useCallback, useContext, useState } from "react";

import "./App.css";
import UseStateApp from "./userState.jsx";
import UseEffectApp from "./userEffect.jsx";
import Header from "./components/Header.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { AppContext } from "./context/AppContext.jsx";
import UseReducer from "./userReducer.jsx";

function App() {
  const [person, setPerson] = useState({
    name: "silan",
    year: 2025,
    age: 32,
  });

  const [showUserStateApp, setShowUserStateApp] = useState(false);
  const [page, setPage] = useState("main");

  if (page === "useeffect") {
    return (
      <>
        <UseEffectApp />
        <button onClick={() => setPage("main")}>Back</button>
      </>
    );
  }
  const changeAge = (direction) => {
    setPerson((pers) => {
      return {
        ...person,
        age: person.age + direction,
        year: person.year + direction,
      };
    });
  };
  const { mobile, name } = useContext(AppContext);
  // const newFunc = () => {}; // every render it will create new instance of this function so props will change and header will rerender
  const newFunc = useCallback(() => {}, []);
  return (
    <>
      {
        <Header newFunc={newFunc} /> /*// it will rendered because referencial
      equality */
      }
      <h1>My name is {name}</h1>
      <h1>
        My age is {person.age} on year {person.year}
      </h1>
      <Contact></Contact>
      <button onClick={() => changeAge(-1)}>Prev Year</button>
      <button onClick={() => changeAge(1)}>Next Year</button>
      <br />
      <br />
      <button onClick={() => setShowUserStateApp(true)}>Next Example</button>
      {showUserStateApp && <UseReducer />}
      <br />
      <br />
      <button onClick={() => setPage("useeffect")}>UseEffect Example</button>
      <Footer />
    </>
  );
}

export default App;
