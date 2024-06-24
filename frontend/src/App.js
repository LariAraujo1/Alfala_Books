import Logo from './components/Header/Logo';
import './App.css';
// import perfil from './img/perfil.svg';
// import sacola from './img/sacola.svg';

import OptionsHeader from './components/Header/IconesHeader/OptionsHeader';
import IconesHeader from './components/Header/IconesHeader';

// const textoOpcoes = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE'];
// const icones= [perfil, sacola];

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Logo></Logo>
       <OptionsHeader></OptionsHeader>
       <IconesHeader></IconesHeader>
      
       {/* <ul className="opcoes">
        {textoOpcoes.map((texto) =>(
          <li className='opcao'><p>{texto}</p></li>
        ))}
         </ul> */}

         
{/* <ul className='icones'>
{icones.map((icone) =>(
  <li className='icone'><img src={icone} alt="" ></img>
  </li>                                            
                     
))}
</ul> */}

      </header>

    </div>
  );
}

export default App;
