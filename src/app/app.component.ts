import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipeList';

  nombre = "Ngen Ko";

  nombre2 = "jesús daVid barAJas gonZÁlez";

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  PI = Math.PI;
  
  porcentaje = 0.453;

  salario = 2450.8;

  hero = {
    nombre: 'Mike Morales',
    clave: 'Spider-Man',
    especialidad: 'Fuerza, rapidez, reflejos proporcionales a una araña',
    edad: 16,
    dirrecion: {
      ciudad: 'San Francisco, CA',
      carrera: 270,
      calle: '7th street'
    }
  }

  valor_de_promesa = new Promise( (resolve, reject) =>{
    setTimeout(() => resolve('Llego la data'), 3000);
  })

  fecha = new Date();

  video = "dNoTvg0t52c";

  pass="Lamejorcontrasena1234";

  activar: boolean = true;

}
