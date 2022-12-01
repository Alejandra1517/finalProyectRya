import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Solicitudes } from '../../models/solicitudes'

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent {

  constructor(private toastrSve: ToastrService) {}


  solicitudesArray: Solicitudes[] = [
    {
      idSolicitud: 1,
      nombreCliente: "Julian",
      servicios: "Enchape",
      estado: "activo"
    },
    {
      idSolicitud: 2,
      nombreCliente: "Julio",
      servicios: "ventana",
      estado: "activo"
    }
  ];

  selectedSolicitud: Solicitudes = new Solicitudes();

  editCliente:any = {};

  agregarSolicitud(){
  
    this.solicitudesArray.push(this.selectedSolicitud);

    this.selectedSolicitud = new Solicitudes() //Limpia el campo de texto
    
    // this.selectedCliente.id += 1;

    this.toastrSve.success('Agregado correctamente');


  }

  
  cargarSolicitud(cliente: Solicitudes){

    this.editCliente=cliente; 

  }


  editarSolicitud(){

    this.selectedSolicitud = this.editCliente

    this.toastrSve.info('Editado correctamente')
      

  }


  eliminarSolicitud(){

    if (confirm("¿Está seguro de eliminar el usuario?")){

      this.solicitudesArray = this.solicitudesArray.filter(x => x != this.selectedSolicitud)

     
      this.selectedSolicitud = new Solicitudes()

      this.toastrSve.error('Eliminado correctamente')

    }


  }





}