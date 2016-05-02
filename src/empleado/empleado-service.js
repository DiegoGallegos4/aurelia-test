import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
import 'isomorphic-fetch';

@inject(HttpClient)
export class EmpleadoService{
	constructor(http) {
		http.configure(config => {
	  	config
	  	  .useStandardConfiguration()
	  	  .withBaseUrl('http://hrm.dev/api/empleado/empleados/')
	  	});

	  	this.http = http;
	}

	getOne(id){
		return this.http.fetch(id);
	}

	get(){
		return this.http.fetch('');
	}

	update(id,data){
		return this.http.fetch(`${id}`,{
			method: 'PUT',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify(data)
		})
	}

	create(data){
		return this.http.fetch('',{
			method: 'POST',
			body: JSON.stringify(data)
		})
	}

	delete(id){
		return this.http.fetch(`${id}`,{
			method: 'DELETE'
		});
	}
}