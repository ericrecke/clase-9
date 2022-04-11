import wallyImg from './img/wally.jpg';
import Clock from './Clock';

function Game(){
    return(
        <div>
            <h1>Find Wally</h1>
            <img src={wallyImg} className="App-wally" alt="wally" />
            <Clock />
        </div>
    );
}

export default Game;
