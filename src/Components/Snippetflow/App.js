import sfappcss from './App.module.css';
import Navbar from './Components/Navbar/Navbar'; 
import Main from './Components/Main/Main.jsx';
import Footer from './Components/Footer/Footer.jsx';


function Snippetflow() {
  
  return (
    <div className={sfappcss["App"]}>
      <Navbar />
      <Main />
      <Footer /> 
    </div>
  );
}

export default Snippetflow;
