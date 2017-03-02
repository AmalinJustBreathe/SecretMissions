import { Component, Input } from '@angular/core';

@Component({
  selector: 'missions-row',
  templateUrl: './mission-row.component.html',
  styleUrls: ['./mission-row.component.css']
})
export class MissionRowComponent {
  @Input() mission;

  constructor() {}

}
