import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
    const appTitle = 'To Do';


  return (
  <section className="todoapp">
      <Header />
      <Main />
      <Footer />
  </section>


  );
}

export default App;
