import './App.css'
//definindo um componente
import Congratulations from "./components/1-definindo-um-componente/Congratulations";
import ProfileEx1 from "./components/1-definindo-um-componente/Profile1";
import ProfileEx2 from "./components/1-definindo-um-componente/Profile2";

//usando um componente
import Profile from "./components/2-usando-um-componente/Profile";
import Greeting from "./components/2-usando-um-componente/Greeting";
import MyApp from "./components/2-usando-um-componente/MyApp";


function App() {

  return (
    <>
      {/*componentes criados */}
      <Congratulations /> 
      <hr/> 
      <ProfileEx1 />
      <hr/> 
      <ProfileEx2 />
      <hr/> 
      <MyApp />
      <hr />
      <Greeting />
      <hr />
      <Profile />
      <hr />
    </>
  )
}

export default App
