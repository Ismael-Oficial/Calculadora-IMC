import './App.css';

function App() {

  function calcularIMC() {
    var kg = document.getElementById('kg').value;
    var cm = document.getElementById('cm').value;
    var result = document.getElementById('resultado');
    var result2 = document.getElementById('resultado2');

    if (kg === "" || cm === "") {
      result.innerHTML = "Informe um valor";
      result2.innerHTML = "";
      return;
    }

    kg = Number(kg);
    cm = Number(cm);
    var imc = kg / (cm * cm);

    result.innerHTML = "IMC: " + imc.toFixed(2);

    if (imc < 18) {
      result2.innerHTML = "IMC BAIXO";
      result2.style.color = "yellow";
    } else if (imc > 25) {
      result2.innerHTML = "IMC ALTO";
      result2.style.color = "red";
    } else {
      result2.innerHTML = "IMC NORMAL";
      result2.style.color = "#09a730";
    }
  }

  function toggleInformation() {
    var info = document.getElementById('information');
    info.style.display = info.style.display === "block" ? "none" : "block";
  }

  return (
    <div className="container">
      <div id="card" onClick={toggleInformation}>
        <p>?</p>
      </div>
      <div className="content">
        <h1>Calcular IMC</h1>
        <input type="number" id="kg" placeholder="Digite seu peso" />
        <br />
        <input type="number" id="cm" placeholder="Digite sua altura" />
      </div>
      <div className="btn">
        <button onClick={calcularIMC}>Calcular</button>
        <p id="resultado"></p>
        <p id="resultado2"></p>
      </div>

      <div id="information">
        <p>O IMC é um cálculo simples que permite avaliar se a pessoa está dentro do peso que é considerado ideal para a sua altura.</p>
        <p>O IMC é considerado normal quando o valor está entre 18 e 25.</p>
      </div>
    </div>
  );
}

export default App
