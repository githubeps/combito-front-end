import { Injectable } from '@angular/core';

import { MonedaModel } from './moneda-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../shared/config.service';

@Injectable()
export class MonedaService {

  constructor(private configService:ConfigService, private httpClient : HttpClient) { }


  getall():Observable<MonedaModel[]> {
    let url= this.configService.getUrlSecurityRes("moneda","getall");
    return this.httpClient.get <MonedaModel[]> (url);
  }

}
