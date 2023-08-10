import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  oliveTexts = [
    'Hallo??',
    'Jeje',
    'Noch mal Olive',
    'So schön',
    'So lieb',
    'Gerade gebadet',
    'Also, nee, ich bin richtig müde geworden',
    'Hallo!! Siehst du mich?',
    'Lass mich schlaffen',
    'Leben ist schön!',
    'Und, langweilig...',
    'SÜÜÜÜSSSSSSS',
    'Naa, kommst du?',
    'Schöne Sone, AHHHHHHH!',
    'Hmmmmmm',
    'NAJA, muss sein!',
    'Ummmmmmmmmm, haaaaaaa'
  ];
  oliveImages = [
    'assets/img/olive/1.jpg',
    'assets/img/olive/2.jpg',
    'assets/img/olive/3.jpg',
    'assets/img/olive/4.jpg',
    'assets/img/olive/5.jpg',
    'assets/img/olive/6.jpg',
    'assets/img/olive/7.jpg',
    'assets/img/olive/8.jpg',
    'assets/img/olive/9.jpg',
    'assets/img/olive/10.jpg',
    'assets/img/olive/11.jpg',
    'assets/img/olive/12.jpg',
    'assets/img/olive/13.jpg',
    'assets/img/olive/14.jpg',
    'assets/img/olive/15.jpg',
    'assets/img/olive/16.jpg',
    'assets/img/olive/17.jpg',
    'assets/img/olive/18.jpg',
    'assets/img/olive/19.jpg',
    'assets/img/olive/20.jpg',
    'assets/img/olive/21.jpg',
    'assets/img/olive/22.jpg',
    'assets/img/olive/23.jpg'
  ];

buttonClicked() {
  alert("Hallo, wie geht es dir?");
  }
}