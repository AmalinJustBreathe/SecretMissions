import GoogleMapsLoader from "google-maps"
import { Injectable } from '@angular/core';

@Injectable()
export class AppGoogleMapsService {

    getDistances(origins, destinations) {
        return new Promise(function(resolve, reject) {
            GoogleMapsLoader.key = "AIzaSyA0ONYsamTfcxx7--q1sUxN0gju1yLNLPk";
            GoogleMapsLoader.load(function(google) {

                if (!origins || origins.length == 0 || !destinations || destinations.length == 0) {
                    reject(Error("Origin or destination missing"));
                    return;
                }

                var distances = [];
                var distanceMatrix = new google.maps.DistanceMatrixService();
                var distanceRequest = {
                    origins: origins, destinations: destinations,
                    travelMode: google.maps.TravelMode.DRIVING, unitSystem: google.maps.UnitSystem.METRIC,
                    avoidHighways: false, avoidTolls: false
                };
                distanceMatrix.getDistanceMatrix(distanceRequest, function(response, status) {
                    if (status != google.maps.DistanceMatrixStatus.OK) {
                        alert('Error was: ' + status);
                    }
                    else {
                        var originList = response.originAddresses;
                        var destinationList = response.destinationAddresses;
                        for (var i = 0; i < originList.length; i++) {
                            var results = response.rows[i].elements;
                            for (var j = 0; j < results.length; j++) {
                                let status = results[j].status + "";
                                if (status != "OK") {
                                    distances.push(-1);
                                }
                                else {
                                    distances.push(results[j].distance.value);
                                }
                            }
                        }
                        resolve(distances);
                    }
                });
            });
        });
    }









}