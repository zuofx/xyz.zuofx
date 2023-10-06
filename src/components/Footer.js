import '../css/footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <img src={logo}/>
            <p className="copyright">
                &#169;
            </p>
            <p className="txt">
                Huy Truong 2023
            </p>
        </div>
    );
}

export default Footer;