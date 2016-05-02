import {inject} from 'aurelia-framework';
import $ from 'jquery';

@inject(Element)
export class Modal{
	constructor(element) {
	  this.element = element;
	}

	attached(){
		$(this.modal).modal()
	}
}