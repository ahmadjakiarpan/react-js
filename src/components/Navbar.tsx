const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-left">
                <button className="menu-button">
                    < i className="fa-solid fa-bars"></i>
                </button>
                <a href="#" className="logo">MegaMart</a>
            </div>
            <div className="navbar-center">
                <div className="search-container">
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    <input type="text" className="search input" placeholder="search essential, groceries and more..." />
                    <button className="filter-button">
                        <i className="fa-solid fa-list-ul"></i>
                        </button>
            </div>
            </div>
            <div className="navbar-right">
                <a href="#" className="nav-link">
                    <i className="fa-regular fa-user"></i>
                </a>
                <a href="#" className="nav-link">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>Cart</span>
                </a>
            </div>
            </header>

    )
}

export default Navbar