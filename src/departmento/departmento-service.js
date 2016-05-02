import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
import 'isomorphic-fetch';

@inject(HttpClient)
export class DepartmentService{
	constructor(http) {
	  http.configure(config => {
	  	config
	  	  .useStandardConfiguration()
	  	  .withBaseUrl('http://hrm.dev/api/departamento/departamentos/')	
	  });

	  this.http = http;
	}

	get(){
		return this.http.fetch('');
	}

	update(id){
		return this.http.fetch(`${id}`,{
			method: 'PUT',
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
	}

	create(){
		return this.http.fetch('',{
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
	}

	delete(id){
		return this.http.fetch(`${id}`,{
			method: 'DELETE'
		});
	}
}

