import { data } from '../input';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  getMostIsolatedCountries(): string {

    let agentsList = this._getAgentsList(data);

    let isolatedAgents = Object.keys(agentsList).filter(key => agentsList[key] === 1);

    let reduceByCountryFunc = this._getReduceByCountryFunc(isolatedAgents);

    let countriesIsolationsMissionsCount = data.reduce(reduceByCountryFunc, {});

    //isolation degree is calculated by num of isolated missions divided by num of non isolated missions 
    let countriesIsolationRates = Object.keys(countriesIsolationsMissionsCount).reduce((results, key) => {
      results[key] = countriesIsolationsMissionsCount[key].isolated / countriesIsolationsMissionsCount[key].notIsolated;
      return results;
    }, []);

    let degrees = Object.keys(countriesIsolationRates)
      .map(key => countriesIsolationRates[key])

    let maxDegree = Math.max(...degrees);

    let mostIsolatedCountries = Object.keys(countriesIsolationRates).filter((key) => countriesIsolationRates[key] === maxDegree);

    return mostIsolatedCountries.join();
  }

  private _getAgentsList(data) {
    return data.reduce((agents, item) => {
      if (item.agent in agents) {
        agents[item.agent] += 1;
      }
      else {
        agents[item.agent] = 1;
      }
      return agents;
    }, {});
  }

  private _getReduceByCountryFunc(isolatedAgents) {
    return (results, item) => {
      let isolationStatus = isolatedAgents.indexOf(item.agent) !== -1 ? "isolated" : "notIsolated";
      if (!(item.country in results)) {
        results[item.country] = { "isolated": 0, "notIsolated": 0 };
      }
      results[item.country][isolationStatus] += 1;
      return results;
    };
  }
}