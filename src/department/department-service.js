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
}

