import logo from './logo.svg';
import Greet from './components/greet';
 import Welcome from './components/welcome';
 import Counter from './components/counter';
 import FunctionClick from './components/functionClick';
 import ClassClick from './components/classClick';
 import EventBind from './components/eventBind';
 import ParentComponent from './components/parentComponent';
import Hello from './components/hello';
import Message from './components/message';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hello /> 
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <Greet name="Lydia" />
      <Welcome name="Sarah"/>
      
    </div>
  );
}

export default App;
