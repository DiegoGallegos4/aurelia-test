import {bindable, inject, customElement} from 'aurelia-framework';

import $ from 'jquery';
import 'select2';
import '../../../node_modules/select2/dist/css/select2.css';

@customElement('select2')
@inject(Element)
export class CustomSelect{
	@bindable name = null;
	@bindable options = {};
	@bindable selected = false;

	constructor(element) {
	  this.element = element;
	}

	attached(){
		$(this.element).find('select')
		  .select2({
		  	dropdownParent: $('#form-modal')
		  })
		  .on('change', (event) =>{
		  	
	  		let changeEvent = new CustomEvent('change',{
	  			detail: {
	  				value: event.delegateTarget.value
	  			},
	  			bubbles: true
	  		});
		  	this.element.dispatchEvent(changeEvent);
		  });

		$('.select2').css({'width':'100%'});
	}
}