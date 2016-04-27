import {DepartmentService} from './department-service';
import {inject} from 'aurelia-framework';

@inject(DepartmentService)
export class Department{
	departments = []

	constructor(service) {
	  this.service = service;
	  this.title = 'Departamentos';
	}

	activate(){
		this.service.get()
		  .then(response =>{
		  	if(response.status < 200 && response.status > 299){
		  		toastr.danger('Hubo un error en el servidor: ' + response.status);
		  		return;
		  	}

		  	if(response.type === 'opaque'){
		  		toastr.danger('La respuesta no puede ser examinada');
		  		return;
		  	}

		  	return response.json()})
		  .then( data => {
		  	this.departments = data;
		  	console.log(data);
		  })
		  .catch(err => console.error(err))
	}
}