import { Component, OnInit } from '@angular/core';
import { Medicos } from 'src/app/models/Medicos';
import { MedicosService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  medico : Medicos[] = [];
  constructor(private service : MedicosService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(( medico ) => {
      this.medico = medico; 
      console.log(medico);
    });
}

}
