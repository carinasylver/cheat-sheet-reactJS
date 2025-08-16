import './App.css'
//definindo um componente
import Congratulations from "./components/1-definindo-um-componente/Congratulations";
import ProfileEx1 from "./components/1-definindo-um-componente/Profile1";
import ProfileEx2 from "./components/1-definindo-um-componente/Profile2";



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
    </>
  )
}

export default App
