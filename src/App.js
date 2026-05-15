import Main from './components/main/index'
import Head from './components/head/index'
import Footer from './components/footer/index'
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Head />
      <Main />
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
