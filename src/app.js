//Theme assets
import 'jquery';
import 'jquery-ui';
import 'bootstrap';
import '../styles/js/jquery-ui-1.10.4.min.js';
import 'metismenu';
import 'pace';
import 'jquery-slimscroll';
import '../styles/js/inspinia.js';
import toastr from 'toastr';

export class App {
  configureRouter(config, router) {
    config.title = 'NH';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: './scripts/welcome',       nav: true, title: 'Welcome' },
      { route: 'departmento'  , name: 'departmento',   moduleId: './departmento/departmento', nav: true, title: 'Departamentos'},
      { route: 'empleado'  , name: 'empleado',   moduleId: './empleado/empleado', nav: true, title: 'Empleados'}
    ]);

    this.router = router;
  }
}
