import wallyImg from './img/wally.jpg';

function Game(){
    return(
        <div>
            <h1>Find Wally</h1>
            <img src={wallyImg} className="App-wally" alt="wally" />
        </div>
    );
}

export default Game;