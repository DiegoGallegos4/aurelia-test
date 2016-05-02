import $ from 'jquery';
import 'bootstrap-datepicker';
import {bindable} from 'aurelia-framework';

export class InputDate{
	@bindable data;

	attached(){
		$('.input-group.date input').datepicker({
		    toggleActive: true,
		    autoclose: true,
		    todayHighlight: true
		});
	}
}