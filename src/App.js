import React, { useEffect, useState } from 'react';
import Tabela from './components/Tabela';
import hoc from './components/hoc';

function App() {
  const CarregandoProdutos = hoc(Tabela);
  const [estadoDaAplicacao, setEstadoDaAplicacao] = useState({
    consultando: false,
    dataset: null,
  });

  useEffect(() => {
    setEstadoDaAplicacao({ consultando: true });
    const apiUrl = `https://www.quandl.com/api/v3/datasets/CEPEA/COFFEE_A.json?api_key=1MdEoN_k1jDwMsjyaWDs`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setEstadoDaAplicacao({ consultando: false, dataset: repos.dataset });
      });
  }, [setEstadoDaAplicacao]);
  
  return (
    <div className='App'>
        <CarregandoProdutos isLoading={estadoDaAplicacao.consultando} dataset={estadoDaAplicacao.dataset} />
    </div>
  );
}
export default App;