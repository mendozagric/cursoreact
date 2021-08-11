import Button from './Button'

const Header = (props) =>{
  const onClick = () =>{
    console.log('Click');
  }
return(
<header className='header'>
<h1>Encabezado {props.title}</h1>
<h1 style={{color:'re', backgroundColor:'black'}}>Encabezado </h1>
<h1 style={headingStyle}>Encabezado </h1>

<Button color='green' text='Crear'/>
<Button color='yellow' text='Agregar'/>
<Button color='#000' text='Crear' onClick={onClick}/>

</header>
)
}

Header.defaultProps={
title:'Título por defecto'
}

const headingStyle={
  color: 'red',
  backgroundColor: 'black'
}

export default Header
