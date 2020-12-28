import { newDiv } from '../modules/utils.js'

export const menuContent = () => {
    const menuButton = document.querySelector('#menu');
    menuButton.style.textDecoration= 'underline';

    const mainContent = newDiv();
    mainContent.setAttribute('id', 'maincontent');

    const menuContent = newDiv();
    menuContent.setAttribute('id', 'menucontent');
    menuContent.innerHTML = `Menu`;

    const menu = newDiv();
    menu.setAttribute('id','menu')

    const menuImg = document.createElement('img');
    menuImg.setAttribute('id', 'menuimage');
    menuImg.setAttribute('src', '../src/images/cosi-fa-by-antonino-esposito-the-new-pizza-has-arrived-in-Milan-02-7f96b1a0a0.jpg')
    menuContent.appendChild(menuImg);
    
    const menuCopy = newDiv();
    menuCopy.setAttribute('id', 'menucopy')

    const appetizers = newDiv();
    appetizers.classList = 'menuitems'

    appetizers.textContent = 'Appetizers'
    const appetizerList = newDiv();
    appetizerList.classList = 'menulist'
    appetizerList.innerHTML = 
    'BURRATA​ creamy mozzarella, PA asian pear jam, smoked prosciutto, focaccia · 14<br>LITTLE GEM LETTUCES ​lemon-garlic dressing, focaccia croutons, evoo, grana padano cheese · 13<br>KALE ​tuscan kale, honeycrisp apples, pecorino, marcona almond, preserved lemon vin. (v, gf) · 13<br>CRISPY POTATOES ​roasted garlic, rosemary, profumo di luca, schmaltz, malt vinegar aioli · 9';
    appetizers.appendChild(appetizerList);
    menuCopy.appendChild(appetizers);

    const pasta = newDiv();
    pasta.classList = 'menuitems'
    pasta.textContent = 'Pasta'
    const pastaList = newDiv();
    pastaList.classList = 'menulist'
    pastaList.innerHTML = 
    'GEMELLI ​‘ragu di medici’ pork & beef spiced butchers ragu, vin santo · 17<br>TAGLIATELLE BOLOGNESE ​hand cut tagliatelle, classic ragu bolognese, parmigiano reggiano · 18<br>GNOCCHI ‘al ORO’ ​ housemade gnocchi, taleggio crema, white truffle, 36 month parmigiano (v) · 17<br>GNOCCHI ‘ALLA’ NONNA​ ​potato gnocchi, toasted garlic, basil, san Marzano tomato, pecorino (v) · 17';
    pasta.appendChild(pastaList);
    menuCopy.appendChild(pasta);

    const pizza = newDiv();
    pizza.classList = 'menuitems'
    pizza.textContent = 'Pizza'
    const pizzaList = newDiv();
    pizzaList.classList = 'menulist'
    pizzaList.innerHTML = 
    'PICCANTE ​spicy tomato sauce, shaved garlic, pecorino, mozzarella, soppressata, hot honey · 18<br>NORCIA ​taleggio crema, mozzarella, thyme, black truffle, pancetta, black pepper · 19<br>MARGHERITA ​bianco di napoli tomatoes, garlic, basil, caputo mozzarella, evoo (v) · 16<br>FUNGHI ​crema, wood roasted mushrooms, thyme, fontina, mozzarella, pickled mustard seeds (v) · 18';
    pizza.appendChild(pizzaList);
    menuCopy.appendChild(pizza);

    const dessert = newDiv();
    dessert.classList = 'menuitems'
    dessert.textContent = 'Dessert'
    const dessertList = newDiv();
    dessertList.classList = 'menulist'
    dessertList.innerHTML = 
    'SALTED BUTTERSCOTCH BUDINO ​bourbon butterscotch pudding with caramel, whipped mascarpone & malt flakes · 7<br>TORTA ‘DELLA OPERA’ ​layered chocolate cake, hazelnut cream, chocolate ganache, candied hazelnuts · 9<br>FIG LEAF PANNA COTTA ​classic custard infused with toasted fig leaf, slow-cooked fig jam, candied pistachios (gf) · 8<br><br><br>';
    dessert.appendChild(dessertList);
    menuCopy.appendChild(dessert);

    
    menu.appendChild(menuCopy)
    menuContent.appendChild(menu)
    mainContent.appendChild(menuContent)
    content.appendChild(mainContent);

};