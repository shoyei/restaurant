import { domSelectors } from './modules/domselectors.js';

const runPage = (() => {
    domSelectors;
    const newDiv = () => document.createElement('div');
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
    const mainContent = newDiv();
    mainContent.setAttribute('id', 'maincontent');
    const mainContentBanner = newDiv();
    mainContentBanner.setAttribute('id', 'maincontentbanner');
    mainContentBanner.textContent = `"You'll probably try to live here."`;
    setTimeout(function() {mainContentBanner.style.opacity = '.8'}, 1500)
    const orderDiv = newDiv();
    orderDiv.setAttribute('id', 'orderBtn');
    const doorDashImg=document.createElement('img');
    doorDashImg.setAttribute('src', '../src/images/pngaaa.com-1842195.png');
    orderDiv.appendChild(doorDashImg);  
    const uberDashImg=document.createElement('img');
    uberDashImg.setAttribute('src', '../src/images/pngwing.com.png');
    orderDiv.appendChild(uberDashImg);  
    //import shit here
    mainContent.appendChild(mainContentBanner)
    mainContent.appendChild(orderDiv)
    content.appendChild(mainContent);

    //create footer
    const footer = newDiv();
    footer.setAttribute('id', 'footer');
    const footHours = newDiv();
    footHours.setAttribute('id', 'footerhours');
    footHours.textContent = 'Hours';
    const footSpacer = newDiv();
    footSpacer.setAttribute('id', 'footerspacer')

    const igLogo = document.createElement('img');
    igLogo.classList = 'social'
    igLogo.setAttribute('src', '../src/images/instagram-icon-white-on-black-circle.png');
    const twitLogo = document.createElement('img');
    twitLogo.setAttribute('id', 'twitlogo')
    twitLogo.classList = 'social'
    twitLogo.setAttribute('src', '../src/images/twitter.png');
    
    const footText = newDiv();
    footText.setAttribute('id', 'footertext');
    footText.innerHTML =
        '222 S King St<br>Seattle, WA 09121<br>206-222-3535'
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

    //hours overlay
    const overlayCont = newDiv();
    overlayCont.setAttribute('id', 'overlay');
    const overlay = newDiv();
    overlay.setAttribute('id', 'overlaydiv')
    overlayCont.appendChild(overlay)
    content.appendChild(overlayCont)

})();
