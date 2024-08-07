import logo from "./logo.svg";
import "./App.css";

function App() {
// bu değişkeni direkt html kodunun içine yazdık, document.innerHtml falan filan hikayesine ihtiyacimiz yok burada
  const name = 'ece'


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React <br></br> HOŞGELDİN ECE CEYLAN
        </a>
        <div style={{backgroundColor:'red'}}>istedigin gibi yaz  {name} bu şekilde direkt js değişkenini buraya yazabiliyosun</div>
        <div style={{backgroundColor:'red'}}>sadece "{'{}'}" kullanman gerekiyor</div>
        <div style={{backgroundColor:'red'}}>Burası uygulamanın en üst elementi, başka componentler oluşturup buraya yazabilirsin</div>
      </header>
    </div>
  );
}

export default App;
