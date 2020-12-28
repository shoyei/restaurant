import { domSelectors } from './modules/domselectors.js';
import { newDiv } from './modules/utils.js'
import { homeContent } from './modules/home.js'
import { menuContent } from './modules/menu.js'
import { aboutContent } from './modules/about.js'
import { contactContent } from './modules/contact.js'

const runPage = (() => {

    let home = true;
    let menu = false;
    let about = false;
    let contact = false;

    const content = document.querySelector('#content')
    const navButtons = document.querySelector('.navbutton')

    //create logo
    const logo = document.createElement('div');
    logo.setAttribute('id', 'logo');
    const logoImg = document.createElement('img');
    logoImg.setAttribute('src', '../src/images/picturetopeople.org-bfa47eb0a8c9e44fa344aa73947e8fd0284f2a57ff5427e18c.png')
    logo.appendChild(logoImg);
    content.appendChild(logo);

    //create nav bar
    const navBar = newDiv();
    navBar.setAttribute('id', 'nav');

    const homeBtn = newDiv();
    homeBtn.setAttribute('id', 'home');
    homeBtn.textContent = 'Home';
    homeBtn.classList = 'navbutton';
    navBar.appendChild(homeBtn);

    const menuBtn = newDiv();
    menuBtn.setAttribute('id', 'menu');
    menuBtn.classList = 'navbutton';
    menuBtn.textContent = 'Menu';
    navBar.appendChild(menuBtn);

    const aboutBtn = newDiv();
    aboutBtn.setAttribute('id', 'about');
    aboutBtn.classList = 'navbutton';
    aboutBtn.textContent = 'About';
    navBar.appendChild(aboutBtn);

    const contactBtn = newDiv();
    contactBtn.setAttribute('id', 'contact');
    contactBtn.classList = 'navbutton';
    contactBtn.textContent = 'Contact';
    navBar.appendChild(contactBtn);

    content.appendChild(navBar);

    //create main content
    const loadPage = () => {
            homeBtn.style.textDecoration = ''
            menuBtn.style.textDecoration = ''
            aboutBtn.style.textDecoration = ''
            contactBtn.style.textDecoration = ''

        if (home && !menu && !about && !contact) { homeContent(); }
        if (!home && menu && !about && !contact) { menuContent(); }
        if (!home && !menu && about && !contact) { aboutContent(); }
        if (!home && !menu && !about && contact) { contactContent(); }
    };
    loadPage();

    const clearPage = () => {
        const main = document.querySelector('#maincontent');
        main.innerHTML = '';
        content.removeChild(main);
    }

    //create footer
    const footer = newDiv();
    footer.setAttribute('id', 'footer');

    const footHours = newDiv();
    footHours.setAttribute('id', 'footerhours');
    footHours.textContent = 'Hours';

    const footSpacer = newDiv();
    footSpacer.setAttribute('id', 'footerspacer');

    const igLogo = document.createElement('img');
    igLogo.classList = 'social'
    igLogo.setAttribute('src', '../src/images/instagram-icon-white-on-black-circle.png');

    const twitLogo = document.createElement('img');
    twitLogo.setAttribute('id', 'twitlogo')
    twitLogo.classList = 'social'
    twitLogo.setAttribute('src', '../src/images/twitter.png');

    const footText = newDiv();
    footText.setAttribute('id', 'footertext');
    footText.innerHTML = '222 S King St<br>Seattle, WA 09121<br>206-222-3535'

    const footLogoDiv = newDiv();
    footLogoDiv.setAttribute('id', 'footlogodiv')

    const footLogo = document.createElement('img');
    footLogo.setAttribute('id', 'footerlogo')
    footLogo.setAttribute('src', '../src/images/picturetopeople.org-bfa47eb0a8c9e44fa344aa73947e8fd0284f2a57ff5427e18c.png');

    footer.appendChild(footHours)
    footer.appendChild(footSpacer)
    footer.appendChild(igLogo);
    footer.appendChild(twitLogo);
    footLogoDiv.appendChild(footLogo);
    footer.appendChild(footText);
    footer.appendChild(footLogoDiv);
    content.appendChild(footer);

    //create hours overlay
    const overlayCont = newDiv();
    overlayCont.setAttribute('id', 'overlay');
    const overlayDiv = newDiv();
    overlayDiv.setAttribute('id', 'overlaydiv');
    overlayDiv.innerHTML = "<h1>Hours</h1><br><hr>Tuesday - Thursday: 5pm - 10pm<br> Friday: 4pm - 11pm<br> Saturday: 12pm - 11pm<br> Sunday: 10am - 3pm<br><br> Call us if you have any questions!<br> 206-222-3535";

    overlayCont.appendChild(overlayDiv);
    content.appendChild(overlayCont);
    footHours.addEventListener('click', function () {
        overlayCont.style.display = 'flex';
        overlayDiv.style.height = '70%';
    }, false);
    overlayCont.addEventListener('click', function () {
        overlayCont.style.display = 'none';
    }, false);
    console.log('hi');

    //navbar event listeners
    homeBtn.addEventListener('click', function () {
        console.log('clicked');
        home = true;
        menu = false;
        about = false;
        contact = false;
        clearPage();
        loadPage();
    }, false)

    menuBtn.addEventListener('click', function () {
        console.log('menu')
        home = false;
        menu = true;
        about = false;
        contact = false;
        clearPage();
        loadPage();
    }, false)


    aboutBtn.addEventListener('click', function () {
        home = false;
        menu = false;
        about = true;
        contact = false;
        clearPage();
        loadPage();
    }, false)

    contactBtn.addEventListener('click', function () {
        home = false;
        menu = false;
        about = false;
        contact = true;
        clearPage();
        loadPage();
    }, false)

    return {
        home,
        menu,
        about,
        contact
    }

})();
