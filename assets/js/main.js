import loader from "./components/loader.js";
import showmenu from "./components/showMenu.js";
import showcart from "./components/showCart.js";
import products from "./components/products.js";
import getProducts from "./helpers/getProducts.js";
import cart from "./components/cart.js"


/* * UI Element */
/* ocultar loader */
 loader()

/* Mostrar menu */
 showmenu()

/* Mostrar Cart */
 showcart()


/* End UI Elements */

/* Product*/
const {db, printProducts} = products(await getProducts())

//    Carrito

cart(db, printProducts)

