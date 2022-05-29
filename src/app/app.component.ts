import { Component } from '@angular/core';
import {Socio} from './socio';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comprobar:boolean=false;
  SocioArray:Socio[]=[
    {socio:1,nombre:"Ana", apellidos:"Fernadez",dni:"50784975H",telefono:647851258,sexo:"Mujer"},
    {socio:2,nombre:"David", apellidos:"Hernadez",dni:"80764982G",telefono:678912458,sexo:"Hombre"},
    {socio:3,nombre:"Andrea", apellidos:"Fernadez",dni:"50602020D",telefono:698745623,sexo:"Mujer"}

  ];

  SelectedSocio:Socio=new Socio();

  AddSocio(){
    this.comprobar=false;
     for (let i = 0; i < this.SocioArray.length; i++) {
       if(this.SelectedSocio.socio == this.SocioArray[i].socio){
          this.comprobar=true;
          break;
       }
     }

     if (this.comprobar == true) { alert('Este Socio ya esta registrado ');}
     else{this.SocioArray.push(this.SelectedSocio);}


    this.SelectedSocio= new Socio();
  }

  EditarSocio(Socio:Socio){
    this.SelectedSocio=Socio;
  }

  delete(posicion:number){
    if (confirm('Estas seguro de querer eliminar a este Socio?')) {
      this.SocioArray.splice( posicion , 1 );
    }
  }
}





