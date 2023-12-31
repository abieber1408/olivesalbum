import { Component, Input, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent {
  @Input() name = 'Olive';
  @Input() img = '/assets/img/olive/1.jpg';
  @Input() description = '13 Jahre alt';
  @Input() canFollow = true;
  constructor(public fs:FriendService) { }
  
  ngOnInit(): void {
  }
}
