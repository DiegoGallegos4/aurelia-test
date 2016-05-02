import {bindable} from 'aurelia-framework';
import '../../../node_modules/select2/dist/css/select2.css';
import $ from 'jquery';
import select2 from 'select2';

export class InputSelect{
	@bindable data;
	attached(){
		$('select').select2({
			 dropdownParent: $('#form-modal')
		});
		$('.select2').css({'width':'100%'});
	}
}