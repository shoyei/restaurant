import { newDiv } from '../modules/utils.js'

export const aboutContent = () => {
    const aboutButton = document.querySelector('#about');
    aboutButton.style.textDecoration= 'underline';

    const mainContent = newDiv();
    mainContent.setAttribute('id', 'maincontent');

    const aboutContent = newDiv();
    aboutContent.setAttribute('id', 'aboutcontent');
    aboutContent.innerHTML = `About`;

    const about = newDiv();
    about.setAttribute('id','about')

    const aboutImg = document.createElement('img');
    aboutImg.setAttribute('id', 'menuimage');
    aboutImg.setAttribute('src', '../src/images/about.jpg')
    about.appendChild(aboutImg);
    
    const aboutCopy = newDiv();
    aboutCopy.setAttribute('id', 'aboutcopy')
    aboutCopy.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum ipsum at sodales mattis. Nam tempus mollis nisl, a tristique velit iaculis sed. Cras sagittis commodo nisl, id commodo velit. Praesent maximus lorem sapien, vel tincidunt justo maximus ut. Vestibulum eleifend aliquet felis, et pretium sapien. Aliquam ullamcorper blandit faucibus. Donec posuere tortor ornare urna convallis, eu euismod lectus mollis. Maecenas vehicula dictum leo, vel auctor nunc.<br><br>Praesent dapibus tellus a mauris rhoncus, iaculis mollis sem lacinia. Vivamus vel dolor orci. Fusce vulputate justo quis ornare aliquet. Duis tincidunt enim metus, in faucibus elit sollicitudin a. Donec neque nisl, mattis vitae congue quis, feugiat vitae quam. Aliquam eget lacus sagittis, iaculis lacus ac, maximus diam. Vestibulum lacinia lacinia mauris, nec mollis tellus laoreet ut. Etiam in tellus tincidunt, eleifend odio vitae, vulputate mauris. Donec gravida, massa quis tempus facilisis, sapien justo malesuada urna, eget sodales elit magna eget mauris.<br><br><br>'


    aboutContent.appendChild(about)
    aboutContent.appendChild(aboutCopy);
    mainContent.appendChild(aboutContent);
    content.appendChild(mainContent);

};