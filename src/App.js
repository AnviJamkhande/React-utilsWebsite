import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" comp1="About" comp2="Home"/>
    <div className='container my-3'>
    <TextForm heading="Enter the text to analyze"/>
    </div>
    </>
  );
}

export default App;
