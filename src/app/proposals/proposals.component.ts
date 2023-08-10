import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {
  names = ['Michelle', 'Matthias', 'Hola'];
  texts = ['Sööön NY-View', 'Höhlenforscher', 'Jej!'];
  images = ['assets/img/friends/1.jpg','assets/img/friends/2.jpg','assets/img/olive/8.jpg'];
  constructor() { }
    ngOnInit(): void {
    
  }

