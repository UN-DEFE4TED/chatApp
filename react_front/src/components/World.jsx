import { Link } from 'react-router-dom';
import socket from '../hooks/socket';

const World = () => {    
    if(!socket){return(
        <div>
            <h1>Chle ja pehle login kr le lodu :)
                <Link to='/login'>Log in First</Link>
            </h1>
        </div>
    )};
    
    socket.on('recive', (payload)=>{
        console.log(`${payload} ${new Date().getHours()}:${new Date().getMinutes()}`);
    })

    const formSubmit = (e)=>{
        e.preventDefault();
        let value = document.getElementById('inp').value;
        socket.emit('send', value);
        document.getElementById('inp').value='';
    };
    
  return (
    <div className='container my-5'>
        <form action="" onSubmit={formSubmit}>
            <input type="text" id='inp' autoComplete='off'/>
            <button className='btn btn-primary mx-3'>click me</button>
        </form>
    </div>
  )
}

export default World
