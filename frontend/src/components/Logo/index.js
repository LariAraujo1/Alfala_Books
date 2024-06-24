import logo from '../../img/logo.svg'
import './style.css'

function Logo (){
    return (
    <div className='logo'>
        <img src={logo} alt='Alfala logo'
        className='logo-img'>
            </img> 
    <p> <strong> Alfala </strong>Books - A sua livraria digital</p>
    </div>
    )
}

export default Logo;
