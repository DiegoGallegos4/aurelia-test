import $ from 'jquery';

export class Empleado{
	title = 'Empleados';
	data = [
		{nombre: 'Diego', apellido: 'Gallegos', fecha_nacimiento: '11'},
	    {nombre: 'Pablo', apellido: 'Gallegos', fecha_nacimiento: '11'},
	    {nombre: 'Ada', apellido: 'Gallegos', fecha_nacimiento: '11'}
    ];
    header = {nombre: 'Nombre', apellido: 'Apellido', 'fecha_nacimiento': 'Fecha de Nacimiento'};
}