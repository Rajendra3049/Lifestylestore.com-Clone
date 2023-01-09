function navbar() {
  return ` <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><img id="logo" class="img-fluid" src="Images/finalLogo.jpeg"></a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item mx-2 dropdown">
                    <a class="nav-link active dropbtn navfont" aria-current="page" href="Women_page/women.html">Women</a>
                    <div class="dropdown-content">
                        <a href="#">Ethnic & Fusion Wear</a>
                        <a href="#">Western Wear</a>
                        <a href="#">Lingerie/Sleepwear</a>
                    </div>
                </li>
                <li class="nav-item mx-2 dropdown">
                    <a class="nav-link dropbtn" href="Mens_page/man.html">Men</a>
                    <div class="dropdown-content">
                        <a href="#">Top Wear</a>
                        <a href="#">Buttom Wear</a>
                        <a href="#">ACtive Wear</a>
                    </div>
                </li>
                <li class="nav-item mx-2 dropdown">
                    <a class="nav-link dropbtn" href="#">Kids</a>
                    <div class="dropdown-content">
                        <a href="#">Boys</a>
                        <a href="#">Girls</a>
                        <a href="#">Top Brands</a>
                    </div>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link" href="#">Shoes & Bags</a>
                </li>
                <li class="nav-item mx-2 ">
                    <a class="nav-link" href="#">Beauty</a>
                </li>
                <li class="mx-2" id="searchQueryContainer">
                    <form>
                        <input id="query" type="text" placeholder="What are you looking for?" />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </form>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link" href="#">More | </a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link" href="#">Sign Up / Sign In</a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link" href="#"><i class="fa-regular fa-heart"></i></a>
                </li>
                <li class="nav-item mx-2">
                    <a class="nav-link" href="cart/cart.html"><i class="fa-solid fa-basket-shopping"></i></a>
                </li>



            </ul>

        </div>
    </div>
</nav>`;
}
export { navbar };
