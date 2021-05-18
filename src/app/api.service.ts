import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { PlatformLocation } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  lineClearURL: any;
  currBaseURL: any;
  trackerURL:any;
  token:any = 'eyJhbGciOiJIUzI1NiJ9.QkVTVF9MQ1VOSV9FU1NQTA.1FcVvOUwquYYuoyA5yBrPcOLNUDf8iJaAZCqNZgjVys';

  constructor(
      private http: HttpClient,
      private platformLocation: PlatformLocation
  ) {
      this.checkBaseUrl();
  }

  checkBaseUrl() {

      this.currBaseURL = (this.platformLocation as any).location.origin;

      let prodURL = this.currBaseURL.match(/production.ai/g);
      let localURL = this.currBaseURL.match(/localhost/g);

      if (prodURL != null) {
          this.lineClearURL = "https://lineclearexpress.com/my";
          this.trackerURL = "https://8ym3webome.execute-api.ap-south-1.amazonaws.com/production/1.0"

      } else {
          this.lineClearURL = "https://lineclearexpress.com/my";
          this.trackerURL = "https://8ym3webome.execute-api.ap-south-1.amazonaws.com/production/1.0"
      }
  }

    getQuotation(zipfrom, zipto, weight, parceltype){

        const url =
        "/quote/quote.php"+
        "?zipfrom=" + zipfrom +
        "&zipto=" + zipto +
        "&weight=" + weight +
        "&parceltype=" + parceltype;


        return this.http.get(this.lineClearURL + url);
    }

    postSendEmail(data){
        
        const httpOptions = {
            headers: new HttpHeaders(
            { 
                'Content-Type': 'application/json'
            })
        }
   
        const url =
        "/quote/inquire.php";

        return this.http.post(url, data, httpOptions);
    }


    getPitstopLocator(postcode){

        const url =
        "/quote/locatebranch.php"+
        "?search=" + postcode;

        return this.http.get(this.lineClearURL + url);
    }

    postTracker(data):Observable<any> {

        const httpOptions = {
            headers: new HttpHeaders(
            { 
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            })
        }
        
        const url = this.trackerURL + "/viewandtrack";
        return this.http.post(url, data, httpOptions);
    }


}
