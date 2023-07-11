import '../css/footer.css';
import logo from '../assets/placeholder.png';

const Footer = () => {
    return (
        <div className="footer">
            <img src={logo}/>
            <h>&#169; zuofx 2023</h>
        </div>
    );
}

export default Footer;