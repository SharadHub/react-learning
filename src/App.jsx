// import { Welcome } from "./components/demo//Welcome";
// import { Button } from "./components/layout/Button";
// import { Hello, HelloWithoutJSX } from "./components/demo/Hello";
// import { UserProfile } from "./components/demo/UserProfile";
// import { ContactForm } from "./components/demo/ContactForm";
// import { StyleForm } from "./components/demo/StyleForm";
// import { CandidateProfile } from "./components/demo/CandidateProfile";
// import { Product } from "./components/demo/Product";
// import { Greeting } from "./props/Greeting";
// import { CardWrapper } from "./props/CardWrapper";
// import { UserDetails } from "./conditionalRendering/UserDatails";
// import { HandleClick } from "./useState/Count";
import { MyForm } from "./formHandling/controlledInputs";
// import { UserGreeting } from "./conditionalRendering/UserGreeting";
import "./App.css";


function App() {
  return (
    <div>
      {/* <HandleClick/> */}
      <MyForm/>
      {/* <UserGreeting isLoggedIn={true} username = "Bishal Bista" /> */}
      


      {/* <UserDetails name = "Sharad Bista" isOnline = {true}/>
      <UserDetails name = "Asmita Mainali" isOnline = {false}/>
      <Product
        title="gaming laptop"
        price={300}
        inStock={true}
        categories={["Electronics", "Computers", "Gaming"]}
      />
      <UserProfile />
      <Hello />
      <HelloWithoutJSX />
      <CandidateProfile />
      <StyleForm />
      <ContactForm />
      <h1>I am a Frontend Developer</h1>
      <Button />
      <Welcome name="Bishal" alias="batman" />
      <Welcome name="Sharad" alias="superman" />
      <Welcome name="Asmita" alias="wonder woman" />
      <Greeting name="Bishal" message="Hello"/>
      <Greeting name="Sharad"/>
      <Greeting message="Kaho Na Pyaar Hain"/>
      <Greeting/>
      <CardWrapper>
        <p>Bishal Bista</p>
        <p>IronMan</p>
        <button>ironman10@gmail.com</button>
      </CardWrapper> */}
    </div>
  );
}

export default App;
