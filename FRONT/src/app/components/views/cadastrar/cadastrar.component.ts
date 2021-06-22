import { Medicos } from 'src/app/models/Medicos';
import { MedicosService } from 'src/app/services/medico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  medico : Medicos = new Medicos();
  createdAt!: string;

  constructor(private service : MedicosService) { }

  ngOnInit(): void {
  }
  cadastrar(): void{
    //let medico = new Medicos();
    console.log(this.medico)
    //medico.createdAt = new Date(this.createdAt);
    //console.log(medico.createdAt);

    this.service.cadastrar(this.medico).subscribe((medico) => {
      console.log(medico);
    })
  }

}
