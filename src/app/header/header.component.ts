import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';

declare var jQuery: any;
declare var $: any;



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  estado: string;
  accesibilidad: boolean;
  registroForm: FormGroup;
  logueoForm: FormGroup;
  public dalton() {
    console.log('click');
    if (!this.accesibilidad) {
      $('#menu').addClass('bg-dark');
      $('#modal1').addClass('bg-dark');
      $('#modal2').addClass('bg-dark');
      $('#modal3').addClass('bg-dark');
      $('#dropdown').addClass('bg-dark');
      $('#footer').addClass('bg-dark');
      $('#barrabusqueda').addClass('busqueda2');
      $('#barracategorias').addClass('active3');
      $('#barranavegacion').addClass('active3');
      $('#barrabusqueda2').addClass('busqueda2');
      $('#barracategorias2').addClass('active3');
      $('#barranavegacion2').addClass('active3');
      $('#barracategorias3').addClass('active3');
      $('#barranavegacion3').addClass('active3');
      $('#imagen1').addClass('imagen2');
      $('#imagen2').addClass('imagen2');
      $('#imagen3').addClass('imagen2');
      $('#imagen4').addClass('imagen2');
      $('#imagen5').addClass('imagen2');
      $('#imagen6').addClass('imagen2');
      $('#imagen7').addClass('imagen2');
      $('#imagen8').addClass('imagen2');
      $('#imagen9').addClass('imagen2');
      $('#imagen10').addClass('imagen2');
      $('#imagen11').addClass('imagen2');
      $('#imagen12').addClass('imagen2');
      $('#imagen13').addClass('imagen2');
      $('#imagen14').addClass('imagen2');
      $('#imagen15').addClass('imagen2');
      $('#imagen16').addClass('imagen2');
      $('#imagen17').addClass('imagen2');
      $('#imagen18').addClass('imagen2');
      $('#imagen19').addClass('imagen2');
      $('#imagen20').addClass('imagen2');
      $('#imagen21').addClass('imagen2');
      $('#imagen22').addClass('imagen2');
      $('#imagen23').addClass('imagen2');
      $('#imagen24').addClass('imagen2');
      $('#imagen25').addClass('imagen2');
      $('#imagen26').addClass('imagen2');
      $('#imagen27').addClass('imagen2');
      $('#poster').addClass('movie-poster2');
      $('#poster2').addClass('movie-poster2');
      $('#boton1').addClass('btn-secondary');
      $('#boton2').removeClass('btn-success');
      $('#boton4').removeClass('btn-success');
      $('#boton6').removeClass('btn-success');
      $('#boton2').addClass('btn-secondary');
      $('#boton3').addClass('btn-secondary');
      $('#boton4').addClass('btn-secondary');
      $('#boton5').addClass('btn-secondary');
      $('#boton6').addClass('btn-secondary');
      $('#botonh1').addClass('btn-secondary');
      $('#botonh2').addClass('btn-secondary');
      $('#botonh3').addClass('btn-secondary');
      $('#botonh4').addClass('btn-secondary');
      $('#botonh5').addClass('btn-secondary');
      $('#botonh2').removeClass('btn-danger');
      $('#botonh4').removeClass('btn-danger');
      $('#botonh5').removeClass('btn-danger');
      $('#botons1').addClass('btn-secondary');
      $('#botons2').removeClass('btn-danger');
      $('#botons2').addClass('btn-secondary');
      $('#botonp1').addClass('btn-secondary');
      $('#botonp2').removeClass('btn-danger');
      $('#botonp2').addClass('btn-secondary');
      $('#botonp3').addClass('btn-secondary');
      $('#botonc1').addClass('btn-secondary');
      $('#botonc2').removeClass('btn-danger');
      $('#botonc2').addClass('btn-secondary');
      $('#botonc3').addClass('btn-secondary');
      this.accesibilidad  = true;
      sessionStorage.setItem('accesibilidad', 'true');
      this.estado = 'Desactivar Accesibilidad';
    }else {
      $('#menu').removeClass('bg-dark');
      $('#modal1').removeClass('bg-dark');
      $('#modal2').removeClass('bg-dark');
      $('#modal3').removeClass('bg-dark');
      $('#footer').removeClass('bg-dark');
      $('#dropdown').removeClass('bg-dark');
      $('#barrabusqueda').removeClass('busqueda2');
      $('#barracategorias').removeClass('active3');
      $('#barranavegacion').removeClass('active3');
      $('#barrabusqueda2').removeClass('busqueda2');
      $('#barracategorias2').removeClass('active3');
      $('#barranavegacion2').removeClass('active3');
      $('#barracategorias3').removeClass('active3');
      $('#barranavegacion3').removeClass('active3');
      $('#imagen1').removeClass('imagen2');
      $('#imagen2').removeClass('imagen2');
      $('#imagen3').removeClass('imagen2');
      $('#imagen4').removeClass('imagen2');
      $('#imagen5').removeClass('imagen2');
      $('#imagen6').removeClass('imagen2');
      $('#imagen7').removeClass('imagen2');
      $('#imagen8').removeClass('imagen2');
      $('#imagen9').removeClass('imagen2');
      $('#imagen10').removeClass('imagen2');
      $('#imagen11').removeClass('imagen2');
      $('#imagen12').removeClass('imagen2');
      $('#imagen13').removeClass('imagen2');
      $('#imagen14').removeClass('imagen2');
      $('#imagen15').removeClass('imagen2');
      $('#imagen16').removeClass('imagen2');
      $('#imagen17').removeClass('imagen2');
      $('#imagen18').removeClass('imagen2');
      $('#imagen19').removeClass('imagen2');
      $('#imagen20').removeClass('imagen2');
      $('#imagen21').removeClass('imagen2');
      $('#imagen22').removeClass('imagen2');
      $('#imagen23').removeClass('imagen2');
      $('#imagen24').removeClass('imagen2');
      $('#imagen25').removeClass('imagen2');
      $('#imagen26').removeClass('imagen2');
      $('#imagen27').removeClass('imagen2');
      $('#poster').removeClass('movie-poster2');
      $('#poster2').removeClass('movie-poster2');
      $('#boton1').removeClass('btn-secondary');
      $('#boton2').removeClass('btn-secondary');
      $('#boton3').removeClass('btn-secondary');
      $('#boton4').removeClass('btn-secondary');
      $('#boton5').removeClass('btn-secondary');
      $('#boton6').removeClass('btn-secondary');
      $('#boton2').addClass('btn-success');
      $('#boton4').addClass('btn-success');
      $('#boton6').addClass('btn-success');
      $('#botonh1').removeClass('btn-secondary');
      $('#botonh2').removeClass('btn-secondary');
      $('#botonh3').removeClass('btn-secondary');
      $('#botonh4').removeClass('btn-secondary');
      $('#botonh5').removeClass('btn-secondary');
      $('#botonh2').addClass('btn-danger');
      $('#botonh4').addClass('btn-danger');
      $('#botonh5').addClass('btn-danger');
      $('#botons1').removeClass('btn-secondary');
      $('#botons2').addClass('btn-danger');
      $('#botonp1').removeClass('btn-secondary');
      $('#botonp2').addClass('btn-danger');
      $('#botonc1').removeClass('btn-secondary');
      $('#botonc2').addClass('btn-danger');
      this.accesibilidad  = false;
      this.estado = 'Activar Accesibilidad';
      sessionStorage.removeItem('accesibilidad');
    }
  }

  constructor(private userService: UserService) {
    this.accesibilidad = false;
    this.estado = 'Activar Accesibilidad';
  }
  ngOnInit() {
    this.registroForm = new FormGroup({
      'fullName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'username': new FormControl(null, Validators.required),
      'password': new FormGroup({
        'newPassword': new FormControl(null, Validators.required),
        'confirmPassword': new FormControl(null, Validators.required)
      }, this.matchPassword)
    });
    this.logueoForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }
  matchPassword(formGroup: AbstractControl) {
    if (formGroup.value.newPassword === formGroup.value.confirmPassword) {
      return null;
    } else {
      return {valid: false};
    }
  }
  onRegister() {
    const user = {
      'fullName': this.registroForm.value.fullName,
      'email': this.registroForm.value.email,
      'username': this.registroForm.value.username,
      'password': this.registroForm.value.password.newPassword
    };
    console.log(user);
    this.userService.addUser(user).subscribe(value => {
        this.registroForm.reset();
      },
      err => {
        console.log(err);
      });
  }
  onLogin() {
    const user = {
      'username': this.logueoForm.value.username,
      'password': this.logueoForm.value.password
    };
    this.userService.login(user).subscribe(data => {
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        this.userService.session.next(true);
      },
      err => {
        console.log(err);
      });
    this.logueoForm.reset();
  }
}
