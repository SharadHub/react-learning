import {Welcome} from "./Welcome"
import {Button} from "./Button"
import { Hello , HelloWithoutJSX } from "./Hello"
import { UserProfile } from "./UserProfile"
import { ContactForm } from "./ContactForm"
import { StyleForm } from "./StyleForm"
import { CandidateProfile } from "./CandidateProfile"
import './App.css'

function App() {

  return (
    <div>
      <CandidateProfile/>
      <StyleForm/>
      <UserProfile/>
      <ContactForm/>
      <Hello />
      <HelloWithoutJSX />
      <h1>I am a Frontend Developer</h1>
      <Welcome />
      <Button />
      
    </div>
  )
}

export default App
