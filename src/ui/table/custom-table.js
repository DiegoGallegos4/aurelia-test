import {bindable, bindingMode} from 'aurelia-framework'

export class CustomTable{
	@bindable header = {};
	@bindable data = [] ;
	@bindable search = false;
	@bindable({defaultBindingMode: bindingMode.twoWay}) count = 0;

	bind() {
	  console.log(this.data)
	  this.buttons = [
	    {'name': 'update','icon':'glyphicon-pencil'},
	    {'name': 'view','icon':'glyphicon-eye-open'},
	    {'name': 'update','icon':'glyphicon-trash'}
	  ];
	  if(this.header == null){
	    this.keys = this.getKeys(this.data[0]);
	    this.values = this.keys.map(this.getSanitizedValues);
 
	  }else{
	  	this.keys = this.getKeys(this.header);
	    this.values = this.getValues(this.header);
	  }
	}

	getSanitizedValues(str){
	  return str.replace(/_/g, ' ')
	    .split(' ').map( str => str.charAt(0).toUpperCase() + str.slice(1))
	    .join(' ');
	}

	getKeys(obj) {
		let keys = [];
		for(const key in obj){
			keys.push(key)
		}
		return keys
	}

	getValues(obj){
		let values = [];
		for(const key in obj){
			values.push(obj[key])
		}
		return values
	}
}
