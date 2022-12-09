import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Clientes } from '../../models/clientes'

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent{

  clientes:Clientes[] = [

    {

      _id: 1,
      nombreCliente: "Alejandra",
      documento: "1026130800",
      telefono: 23323432,
      direccion: "Medellín",
      estado: "Activo",
      fecha: "03/05/2022"

    }

  ];

  clientesForm: FormGroup;
  clientesEditForm: FormGroup;

  pattern:any =  "^[a-zA-Z\s]{1,254}"

  // regexDocumento:any = "/[VE]-[0123456789]{1,8}/" 

  constructor(private fb: FormBuilder,
    private toastrSve: ToastrService) {


      this.clientesForm = this.fb.group({
        nombreCliente: ['', [Validators.required, Validators.pattern(this.pattern)]],
        documento: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
        telefono: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(13)]],
        direccion: ['', Validators.required]
      })

      this.clientesEditForm = this.fb.group({
        nombreCliente: ['', [Validators.required, Validators.pattern(this.pattern)]],
        documento: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]],
        telefono: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(13)]],
        direccion: ['', Validators.required]
      })


    }

    get documento() {
      return this.clientesForm.get('documento');
    } 

   


  selectedCliente: Clientes = new Clientes();

  agregarCliente(){
  
    this.clientes.push(this.selectedCliente);

    this.toastrSve.success('Registrado correctamente');

    this.selectedCliente = new Clientes()

  }
  
  


  

  editCliente:any = {};

  cargarCliente(clientes: Clientes){
    
      this.editCliente = clientes

  }



  modificarCliente(){

    this.toastrSve.info('Editado correctamente')

      this.editCliente = new Clientes();


  }


  eliminarCliente(cliente: Clientes){

    if (confirm("¿Está seguro de eliminar el cliente?")){

      this.clientes = this.clientes.filter(x => x != cliente)
     
          cliente = new Clientes()
    
          this.toastrSve.error('Eliminado correctamente')

    }


  }

}
