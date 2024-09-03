// Import your Scroll class if it's in a separate file
//import Scroll from './Scroll';
// Importez la classe Scroll en utilisant un import nommé.
import { Scroll } from 'c:/Users/DoKca/Desktop/Projects/front/PassManager/nextuiapp/app/ScrollLib/Scroll';


export class ScrollList extends HTMLElement {
    private scrollInstance: Scroll | null;

    constructor() {
      super();
      this.scrollInstance = null;
    }
  
    connectedCallback() {
      if (this.children.length > 0) {
        this.scrollInstance = new Scroll(this);
      }
    }
  
    disconnectedCallback() {
      if (this.scrollInstance) {
        this.scrollInstance.destroy();  // Assurez-vous que votre classe Scroll a une méthode destroy pour nettoyer.
      }
    }
  }
  
  window.customElements.define('scroll-list', ScrollList);
  