import { newDiv } from '../modules/utils.js'

export const contactContent = () => {
    const contactButton = document.querySelector('#contact');
    contactButton.style.textDecoration= 'underline';

    const mainContent = newDiv();
    mainContent.setAttribute('id', 'maincontent');

    const contContent = newDiv();
    contContent.setAttribute('id', 'contcontent');
    contContent.innerHTML = `Contact`;

    const contactBox = newDiv();
    contactBox.setAttribute('id', 'contactbox');
    contContent.appendChild(contactBox);

    const infoDiv = newDiv();
    infoDiv.setAttribute('id', 'infodiv')
    infoDiv.classList = 'contactdiv'
    infoDiv.innerHTML = '<p><strong>Address:</strong><br>222 S King St<br>Seattle, WA 09121<br>206-222-3535<br><a href="http://www.mangiamo.com">Mangiamo.com</a><br><br><strong>Email:</strong> <a href="http://www.mangiamo.com">info@mangiamo.com</a><br></p>'
    contactBox.appendChild(infoDiv)

    const mapDiv = newDiv();
    mapDiv.setAttribute('id', 'mapdiv')
    mapDiv.classList = 'contactdiv'
    mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5380.009266274762!2d-122.33157153519333!3d47.606599586722346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1609178288755!5m2!1sen!2sus" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
    contactBox.appendChild(mapDiv)

    mainContent.appendChild(contContent);
    content.appendChild(mainContent);

};