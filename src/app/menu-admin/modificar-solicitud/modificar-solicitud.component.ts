import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { modificarSolicitud } from '../../models/modificarSolicitud';

@Component({
  selector: 'app-modificar-solicitud',
  templateUrl: './modificar-solicitud.component.html',
  styleUrls: ['./modificar-solicitud.component.css']
})
export class ModificarSolicitudComponent  {

  constructor(private toastrSve: ToastrService) { }



  solicitudesArray: modificarSolicitud[] = [
    {

     servicio: "nada",
     cantidad: 1,
     total: 700000
    
    },
    {

      servicio: "nada",
      cantidad: 1,
      total: 800000
     
    }
  ];


  selectedSolicitud: modificarSolicitud = new modificarSolicitud();

  editCliente:any = {};

  agregarCliente(){
  
    this.solicitudesArray.push(this.selectedSolicitud);

    this.selectedSolicitud = new modificarSolicitud() //Limpia el campo de texto
    
    // this.selectedCliente.id += 1;

    this.toastrSve.success('Agregado correctamente');

    


  }


  
  cargarCliente(cliente: modificarSolicitud){

    this.editCliente=cliente; 

  }


  editarCliente(){

    this.selectedSolicitud = this.editCliente

    this.toastrSve.info('Editado correctamente')
      

  }



  eliminarCliente(){

    if (confirm("¿Está seguro de eliminar el usuario?")){

      this.solicitudesArray = this.solicitudesArray.filter(x => x != this.selectedSolicitud)
     
      this.selectedSolicitud = new modificarSolicitud()

      this.toastrSve.error('Eliminado correctamente')

    }


  }



}
