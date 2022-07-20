import logo from './logo.svg';

export default function Header(){
    return(
    <header className="App-header">
        <nav className="nav">
            <img src={logo} className="nav-logo" alt="logo" />
            <ul className= "nav-items">
                <li>Home</li>
                <li>Pricing</li>
                <li>Contacts</li>
            </ul>
        </nav>
    </header>
    )

}