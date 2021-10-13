

import Facts from './Components/facts';
import Header from './Components/header'
import "./Styling/header.css"
import "./Styling/facts.css"
import "./Styling/myths.css"
import Myths from './Components/myths';

function App() {
  return (
   <div>
    <Header></Header>
    <Facts></Facts>
    <Myths></Myths>
   </div>
    
  );
}

export default App;
