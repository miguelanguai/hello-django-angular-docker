import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from '../hello-world.service';
import { Sensor } from '../sensor';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-hola',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './hola.component.html',
  styleUrl: './hola.component.css'
})
export class HolaComponent implements OnInit {


  sensores: any[] = [];  // Array para almacenar los sensores

  constructor(private helloWorldService: HelloWorldService) {}

  ngOnInit(): void {
    this.fetchSensores();  // Llamamos al método fetchSensores cuando el componente se inicializa
  }

  // Método para obtener los sensores del servicio
  fetchSensores(): void {
    this.helloWorldService.getSensores().subscribe(
      (data: Sensor[]) => {
        this.sensores = data;
      },
      (error) => {
        console.error('Error al obtener sensores:', error);
      }
    );
  }
}
