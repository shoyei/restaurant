import { homeContent } from './home.js'
import { menuContent } from './menu.js'
import { aboutContent } from './about.js'
import { contactContent } from './contact.js'



export const newDiv = () => document.createElement('div');

export const loadPage = () => {
    console.log('loadPage')
    if (home && !menu && !about && !contact) { homeContent(); }
    if (!home && menu && !about && !contact) { menuContent(); }
    if (!home && !menu && about && !contact) { aboutContent(); }
    if (!home && !menu && !about && contact) { contactContent(); }
};

export const clearButton = () => {
    
}