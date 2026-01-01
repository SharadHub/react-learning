import {Welcome} from "./Welcome"
import {Button} from "./Button"
import { Hello , HelloWithoutJSX } from "./Hello"
import './App.css'

function App() {

  return (
    <div>
      <Hello />
      <HelloWithoutJSX />
      <h1>I am a Frontend Developer</h1>
      <Welcome />
      <Button />
      
    </div>
  )
}

export default App
