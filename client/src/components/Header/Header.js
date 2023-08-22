import style from './Header.module.css';
import NavigationItem from './NavigationItem';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className="listItem"><img src="white-origami.png" alt="white-origami" /></li>
                <Link to="/"><NavigationItem>Home</NavigationItem></Link>
                <Link to="/about"><NavigationItem>About</NavigationItem></Link>
                <Link to="/contact-us"><NavigationItem>Contact us</NavigationItem></Link>
                <Link to="/about/pesho"><NavigationItem>Pesho</NavigationItem></Link>
                <Link to="/about/gosho"><NavigationItem>Going to 5</NavigationItem></Link>
                <Link to="/about/stamat"><NavigationItem>Going to 6</NavigationItem></Link>
                <Link to="/about/mariyka"><NavigationItem>Going to 7</NavigationItem></Link>
                <Link to="/about/malinka"><NavigationItem>Going to 8</NavigationItem></Link>
                <Link to="/about/tosho"><NavigationItem>Going to 9</NavigationItem></Link>
                {/* <NavigationItem>Going to 10</NavigationItem> */}
                {/* <NavigationItem>Going to 11</NavigationItem> */}

                <Link to="/about">About</Link>
            </ul>
        </nav>
    );
};

export default Header;