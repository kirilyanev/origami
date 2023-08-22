import style from './Header.module.css';
import NavigationItem from './NavigationItem';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className="listItem"><img src="white-origami.png" alt="white-origami" /></li>
                <NavLink style={(navData) => navData.isActive ? {backgroundColor: 'red'} : {backgroundColor: ''}} to="/" ><NavigationItem>Home</NavigationItem></NavLink>
                <NavLink style={(navData) => navData.isActive ? {backgroundColor: 'red'} : {backgroundColor: ''}} to="/about" end ><NavigationItem>About</NavigationItem></NavLink>
                <NavLink style={(navData) => navData.isActive ? {backgroundColor: 'red'} : {backgroundColor: ''}} to="/contact-us" end ><NavigationItem>Contact us</NavigationItem></NavLink>
                <NavLink style={(navData) => navData.isActive ? {backgroundColor: 'red'} : {backgroundColor: ''}} to="/about/pesho"><NavigationItem>Pesho</NavigationItem></NavLink>
                <NavLink style={(navData) => navData.isActive ? {backgroundColor: 'red'} : {backgroundColor: ''}} to="/about/gosho"><NavigationItem>Going to 5</NavigationItem></NavLink>
                <NavLink style={(navData) => navData.isActive ? {backgroundColor: 'red'} : {backgroundColor: ''}} to="/about/stamat"><NavigationItem>Going to 6</NavigationItem></NavLink>
                <NavLink style={(navData) => navData.isActive ? {backgroundColor: 'red'} : {backgroundColor: ''}} to="/about/mariyka"><NavigationItem>Going to 7</NavigationItem></NavLink>
                <NavLink style={(navData) => navData.isActive ? {backgroundColor: 'red'} : {backgroundColor: ''}} to="/about/malinka"><NavigationItem>Going to 8</NavigationItem></NavLink>
                <NavLink style={(navData) => navData.isActive ? {backgroundColor: 'red'} : {backgroundColor: ''}} to="/about/tosho"><NavigationItem>Going to 9</NavigationItem></NavLink>
                {/* <NavigationItem>Going to 10</NavigationItem> */}
                {/* <NavigationItem>Going to 11</NavigationItem> */}

                {/* <Link to="/about">About</Link> */}
            </ul>
        </nav>
    );
};

export default Header;