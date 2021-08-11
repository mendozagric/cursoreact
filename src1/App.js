//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header'

function App() {
const nombre = 'Ricardo'
const x = true

 return (
<div>
<h1>Hola Mundo Desde React</h1>
<h1>Hola Mundo Desde React {nombre}</h1>
<h1>Hola Mundo Desde React {30 + 25}</h1>
<h1>Hola Mundo Desde React {x ? 'YES' : 'NO'}</h1>

 <Header title='Prop de Ejemplo 2' />
<Header />
<Header title='Prop de Ejemplo' />
<Header />
<Header />
<Header />

 </div>
);
}

export default App;
