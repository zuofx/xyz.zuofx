import '../css/404.css';
import coconut from "../assets/coconut.png"

const GFX = () => {
    return (
        <div className="ErrorPage">
            <h1>
                ERROR 404: PAGE NOT FOUND
            </h1>
            <img src={coconut}></img>

            <div className="backButton">
                <div>
                    <a href="/home">
                    GO BACK  
                    </a>
                </div>
            </div>

        </div>
    );
};

export default GFX;