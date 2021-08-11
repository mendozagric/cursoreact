const Button = (props) =>{
  //const onClick = () =>{
    //console.log('Click');
  //}

  return(
    <div>
      <button onClick={props.onClick} className='btn' style={{backgroundColor:props.color}}>{props.text}</button>
    </div>
  )
}

Button.defaultProps={
  color:'red',
  text:'Delete'
}

export default Button
