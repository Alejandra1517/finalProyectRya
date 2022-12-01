import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { crearSolicitud } from '../../models/crearSolicitud';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent {




  // constructor(private toastrSve: ToastrService) { }



  solicitudes: crearSolicitud[] = [
    {

     servicio: "baldosa",
     cantidad: 3,
     descripcion: "baldosa blanca"
    
    },
    {

      servicio: "puerta",
      cantidad: 2,
      descripcion: "de madera :v"
    
    }
  ];


  
  solicitudesForm: FormGroup;
  solicitudesEditForm: FormGroup;


  constructor(private fb: FormBuilder,
    private toastrSve: ToastrService) {



      this.solicitudesForm = this.fb.group({
        servicio: ['', Validators.required],
        cantidad: ['', Validators.required],
        descripcion: ['', Validators.required]
      })

      this.solicitudesEditForm = this.fb.group({
        servicio: ['', Validators.required],
        cantidad: ['', Validators.required],
        descripcion: ['', Validators.required]
      })


    }


  selectedSolicitudes: crearSolicitud = new crearSolicitud();

  agregarSolicitud(){
  
    this.solicitudes.push(this.selectedSolicitudes);

    this.toastrSve.success('Categoría registrada correctamente');

    this.selectedSolicitudes = new crearSolicitud()

  }
  
  


  

  editSolicitud:any = {};

  cargarSolicitud(materiales: crearSolicitud){
    
      this.editSolicitud = materiales

  }



  modificarSolicitud(){

    this.toastrSve.info('Editado correctamente')

      this.editSolicitud = new crearSolicitud();


  }


  eliminarSolicitud(solicitud: crearSolicitud){

    if (confirm("¿Está seguro de eliminar la solicitud?")){

      this.solicitudes = this.solicitudes.filter(x => x != solicitud)
     
          solicitud = new crearSolicitud()
    
          this.toastrSve.error('Eliminado correctamente')

    }


  }

}
