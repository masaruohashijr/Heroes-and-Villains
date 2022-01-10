  import { Injectable } from '@angular/core';
  import { RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';

  @Injectable({
    providedIn: 'root'
  })
  export class DataService{


    public finishOptions(options: ResponseOptions, { headers, url }: RequestInfo) {
      if (options.status) {
        options.statusText = this.getStatusText(options.status);
      } else {
        options.statusText = this.getStatusText(200);
      }
      options.headers = headers;
      options.url = url;
      return options;
    }

    
    protected getStatusText(httpStatusCode: number): string {
    switch (httpStatusCode) {
      case 200:
        return 'Ok';
      case 404:
        return 'Not found';
      case 500:
        return 'Internal server error';
      default:
        return '';
    }
  }

    constructor() { }
  }