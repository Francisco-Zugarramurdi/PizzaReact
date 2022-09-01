import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Layout from './Layout/Layout';
import Footer from './Components/Footer/Footer';
import Routes from './Routes/Routes';
function App() {
  return (
   <Layout>
      <Navbar/>
      <Routes/>
      <Footer/> 
   </Layout>
  );
}

export default App;
