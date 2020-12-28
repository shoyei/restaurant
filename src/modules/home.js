import { newDiv } from '../modules/utils.js'

export const homeContent = () => {
    const homeButton = document.querySelector('#home');
    homeButton.style.textDecoration= 'underline';

    const mainContent = newDiv();
    mainContent.setAttribute('id', 'maincontent');
    const mainContentBanner = newDiv();
    mainContentBanner.setAttribute('id', 'maincontentbanner');
    mainContentBanner.textContent = `"You'll probably want to live here."`;
    setTimeout(function () { mainContentBanner.style.opacity = '.8' }, 500)
    const orderDiv = newDiv();
    orderDiv.setAttribute('id', 'orderBtn');
    const doorDashImg = document.createElement('img');
    doorDashImg.setAttribute('src', '../src/images/pngaaa.com-1842195.png');
    orderDiv.appendChild(doorDashImg);
    const uberDashImg = document.createElement('img');
    uberDashImg.setAttribute('src', '../src/images/pngwing.com.png');
    orderDiv.appendChild(uberDashImg);
    mainContent.appendChild(mainContentBanner);
    mainContent.appendChild(orderDiv);
    content.appendChild(mainContent);
};