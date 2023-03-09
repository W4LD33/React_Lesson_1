import '../Header/header.css'

function Header() {
    return (
        <header className="Header">
            <h2 className='logo'>Chegg</h2>
            <div className="Header-right">
            <h3>Learn about <br></br>
                <span>Chegg Study</span></h3>
                <h2>Sign In</h2>
                <p>|</p>
                <h2>More</h2>
            </div>
        </header>
    );
}

export default Header