import {  Link } from 'react-router-dom';

const style = {
    padding: 5,
    margin: 5
}

const Nav = () => {
    return (
        <div>
            <Link style={style} to="/">home</Link>
            <Link style={style} to="/notes">notes</Link>
        </div>
    )
};

export default Nav;