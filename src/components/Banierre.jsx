
import logo from '../assets/images/bargny.jpeg'; // Importez votre image
const  Banniere = () => {
    return (<>
    <div className='h-64 overflow-hidden  '>
        
        <img  className='object-cover w-full' src={logo} alt="Logo de mon application" />

    </div>
        
    </>)
}

export default Banniere