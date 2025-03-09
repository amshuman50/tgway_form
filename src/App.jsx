
import Form from './form/form'
import Form1 from './form/form1'
import Nav2 from './nav/nav2'
import './App.css'
import Carousal from './carousal/carousal'
import wheat from "./Assets/wheat.png"

function App() {
  return (
    <>
      <Nav2 />
      {/* <img style={{marginLeft:150,marginRight:150,height:380,width:"80%"}} src={wheat}/> */}
      <Carousal/>
      <Form1 />
    </>
  )
}

export default App
