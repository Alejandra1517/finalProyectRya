import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Servicios } from '../../models/servicios';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

  servicios:Servicios[] = [

    {
    
      id: 1,
      nombre: "Acabados",
      categoria: "Obra blanca",
      estado: "Activo",
      fecha: "28/11/2022"
      
    },
      {

        id: 2,
        nombre: "Baldosa",
        categoria: "Obra blanca",
        estado: "Activo",
        fecha: "28/11/2022"

      }

];

serviciosForm: FormGroup;
serviciosEditForm: FormGroup;

pattern:any =  "^[a-zA-Z\s]{1,254}"


constructor(private fb: FormBuilder,
  private toastrSve: ToastrService) {



    this.serviciosForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(this.pattern)]]
    })

    this.serviciosEditForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(this.pattern)]]
    })


  }


selectedServicio: Servicios = new Servicios();

agregarServicio(){

  this.servicios.push(this.selectedServicio);

  this.toastrSve.success('Registrado correctamente');

  this.selectedServicio = new Servicios()

}






editServicio:any = {};

cargarServicio(servicios: Servicios){
  
    this.editServicio = servicios

}



modificarServicio(){

  this.toastrSve.info('Editado correctamente')

    this.editServicio = new Servicios();


}


eliminarServicio(servicios: Servicios){

  if (confirm("¿Está seguro de eliminar el servicio?")){

    this.servicios = this.servicios.filter(x => x != servicios)
   
        servicios = new Servicios()
  
        this.toastrSve.error('Eliminado correctamente')

  }


}
}
