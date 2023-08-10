import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-olives-card',
  templateUrl: './olives-card.component.html',
  styleUrls: ['./olives-card.component.scss']
})
export class OlivesCardComponent implements OnInit{
  @Input() text: string = "";
  @Input() img: string = "";
  
  Constructor() { }

  ngOnInit(): void {}
  }

