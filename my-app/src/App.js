import logo from './logo.svg';
import './App.css';
import House from './House';
import Check from './CheckProps'
import {Route,Routes} from 'react-router-dom';
import Greetings from './Greetings';
import StateCheck from './StateCheck';
import FetchCheck from './FetchCheck';
import ConRender from './ConRender';
import ConRenderOne from './ConRenderOne';
function App() {
  return (
    <div className="App">
      <h1> Welcome!</h1>
      <Routes>
        <Route path ="/" element={<House/>} />
        <Route path ="StateCheck" element={<StateCheck/>}></Route>
        <Route path="check" element={<Check name="Jane Doe" age={25} />} />
        <Route path="greetings" element={<Greetings/>} />
        <Route path="fetch" element={<FetchCheck/>} />
        <Route path="ConRender" element={<ConRender/>} />
        <Route path="ConRenderOne" element={<ConRenderOne/>} />
      </Routes>
    </div>
  );
}

export default App;