import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalizado',
  templateUrl: './personalizado.component.html',
  styleUrls: ['./personalizado.component.css']
})
export class PersonalizadoComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() nome = ""
  @Input() sobrenome= "";
}
