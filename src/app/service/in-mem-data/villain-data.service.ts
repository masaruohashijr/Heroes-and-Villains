import { Injectable } from '@angular/core';
import { RequestInfo, ResponseOptions, STATUS } from 'angular-in-memory-web-api';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class VillainDataService extends DataService {
  putVillains(villains: any[], reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const info = this.getInfoFromVillainUrl(reqInfo.req.url);
      console.log("info.id"+info.id)

      let data: any;

      if (info.id) {
        data = villains.find((b) => b.id === info.id);
      } else {
        data = villains
      }
      console.log(villains.find((b) => b.id === info.id))
      const body = reqInfo.utils.getJsonBody(reqInfo.req)
      Object.assign(info, body);
      
      const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
      const options: ResponseOptions = data ?
        {
          body: dataEncapsulation ? { data } : data,
          status: STATUS.OK
        } :
        {
          body: { error: `Hero with id = '\$\{info.id\}' not found` },
          status: STATUS.NOT_FOUND
        };
        console.log(options.status)
        console.log(data.data)
      return this.finishOptions(options, reqInfo);
    });
  }
  public getVillains(villains: any[], reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const info = this.getInfoFromVillainUrl(reqInfo.req.url);
      let data: any;
      console.log("info: "+info.id)
      if (info.id) {
        data = villains.find((b) => b.id === info.id);
        console.log("info: "+info.id)
      } else {
        data = villains
        console.log("data = villains")
      }

      const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
      console.log("data: "+data)
      const options: ResponseOptions = data ?
        {
          body: dataEncapsulation ? { data } : data,
          status: STATUS.OK
        } :
        {
          body: { error: `Villain with id = '\$\{info.id\}' not found` },
          status: STATUS.NOT_FOUND
        };
      return this.finishOptions(options, reqInfo);
    });
  }


  public getInfoFromVillainUrl(url: string): any {
    console.log(url)
    const regex = /api\/villain\/(.*)$/i;
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

  constructor() { 
    super();
  }
}