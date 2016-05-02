import {EmpleadoService} from './empleado-service';
import {inject} from 'aurelia-framework';
import toastr from 'toastr';

@inject(EmpleadoService)
export class EmpleadoForm {
	constructor(service) {
	  this.nombre = '';
	  this.apellido = '';
	  this.service = service;
	}

	activate(){
		this.selectOptions = [
			{label: 'Admin', value: 1},
			{label: 'IT', value: 2},
			{label: 'SCL', value: 3}
		];

		this.defaultSelected = this.selectOptions[0];
	}

	changeCallback(evt){
		console.log(evt.detail.value);
	}

	submit(){
		let values = $('form').serializeArray();
		let jsonRequest = {};
		values.forEach(( elt, index, array) => { 
			if(elt.name !== 'top-search'){
				jsonRequest[elt.name] = elt.value;
			}
		})
		
		jsonRequest['activo'] = true;

		this.service.create(jsonRequest)
		  .then( response => {
		  	if(response.status < 200 || response.status > 299){
		  		toastr.danger('Error en el servidor: ' + response.status)
		  	}

		  	if(response.type === 'opaque'){
		  		toastr.warning('La respuesta no puede leerse')
		  	}

		  	return response.json()
		  }).then(data =>{
		  	console.log(data);
		  }).catch( err => console.error(err))  
	}
}
