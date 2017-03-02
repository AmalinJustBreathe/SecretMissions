import { Injectable } from '@angular/core';
import { AppGoogleMapsService } from '../google-maps-service';
import { data } from '../../input';

@Injectable()
export class MissionTableService {
  private _distancesPromise;
  private _missions;

  constructor(private _googleMapsService: AppGoogleMapsService) {
    this.getDistances();
  }

  getDistances() {
    const origins = ["10 Downing st. London"];
    const destinations = data.map(mission => mission.address);
    this._distancesPromise = this._googleMapsService.getDistances(origins, destinations);
    this._distancesPromise.then((distances) => {

      this._markClosests(distances);
      this._markFarests(distances);
    },
      (err) => {
        console.log(err);
      }
    )
  }

  get missions() {
    if (!this._missions) {
      this._missions = data.sort(this._sortByDate);
    }
    return this._missions;
  }

  private _sortByDate(a, b) {
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateA > dateB ? 1 : -1;
  }

  private _markClosests(distances) {
    //assuming there is only one closest place
    const closest = Math.min(...distances);
    const closestIndex = distances.indexOf(closest);
    this._missions[closestIndex].isClosest = true;
  }

  private _markFarests(distances) {
    //assuming there is only one farest place
    const farest = Math.max(...distances);
    const farestIndex = distances.indexOf(farest);
    this._missions[farestIndex].isFarest = true;
  }
}