import { Injectable } from '@angular/core';
import { RequestInfo, ResponseOptions, STATUS } from 'angular-in-memory-web-api';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PowerDataService extends DataService {
  putPower(powers: any[], reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const info = this.getInfoFromPowerUrl(reqInfo.req.url);
      let data: any;

      if (info.id) {
        data = powers.find((b) => b.id === info.id);
      } else {
        data = powers
      }
      const body = reqInfo.utils.getJsonBody(reqInfo.req)
      Object.assign(info, body);
      
      const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
      const options: ResponseOptions = data ?
        {
          body: dataEncapsulation ? { data } : data,
          status: STATUS.OK
        } :
        {
          body: { error: `Power with id = '\$\{info.id\}' not found` },
          status: STATUS.NOT_FOUND
        };
      return this.finishOptions(options, reqInfo);
    });
  }

  public getPowers(powers: any[], reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const info = this.getInfoFromPowerUrl(reqInfo.req.url);
      let data: any;

      if (info.id) {
        data = powers.find((b) => b.id === info.id);
      } else {
        data = powers
      }

      const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
      const options: ResponseOptions = data ?
        {
          body: dataEncapsulation ? { data } : data,
          status: 200
        } :
        {
          body: { error: `Power with id = '\$\{info.id\}' not found` },
          status: 404
        };
      return this.finishOptions(options, reqInfo);
    });
  }


  public getInfoFromPowerUrl(url: string): any {
    console.log(url)
    const regex = /api\/power\/(.*)$/i;
    const matches = regex.exec(url);
    const parts = matches && matches.length === 2 ? matches[1].split('/') : [];
    console.log(parts[0])
    console.log(parts[1])
    console.log(parts[2])
    console.log(parts[3])
    return {
      id: +parts[0],
      name: +parts[1],
      power: +parts[2],
      alterEgo: parts[3]
    };
  }

  constructor() { super() }
}