import '../css/Home.css';

//Assets
import logo from '../assets/logo.png';
import intro from '../assets/intro.png'

const Home = () => {
    return (
        <div className="Home">
            <h1>
                Hello.<br></br>
                <span>
                    I'm Huy
                </span>
                <br/>
                
            </h1>
            <h2>
                Let's Explore...<span>|</span>
            </h2>

            <div className="goButton">
                <div>
                    <a href="/b">
                    START  
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;