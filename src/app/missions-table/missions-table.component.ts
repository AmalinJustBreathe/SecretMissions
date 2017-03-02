import { Component, OnInit } from '@angular/core';
import { data } from '../../input';
import { MissionTableService } from './mission-table.service';
@Component({
  selector: 'missions-table',
  templateUrl: './missions-table.component.html',
  styleUrls: ['./missions-table.component.css'],
  providers: [MissionTableService]
})
export class MissionsTableComponent implements OnInit {
  public missions;

  constructor(private _missionTableService: MissionTableService) {
  }

  ngOnInit() {
    this.missions = this._missionTableService.missions;
  }

}
