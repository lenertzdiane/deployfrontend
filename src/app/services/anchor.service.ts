import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Anchor } from '../models/anchor';
import 'rxjs/operators';
import 'rxjs/operators';
import 'rxjs/operators';

@Injectable()
export class AnchorService {

    constructor(private http: Http) {
    }

    getAnchors(searchCriteria:any) : Observable<Anchor[]>{

        return this.http.get("http://localhost:3000/getAnchors")
                .map((res:any) => {
                    return res.json();
                })
                .catch((error:any) => {
                    return Observable.throw(error.json ? error.json().error : error || 'Server error')
                });
    }

    insertNewAnchor(anchor:Anchor): Observable<any>{
        return this.http.post("http://localhost:3000/insertNewAnchor", anchor)
            .map((res:any) => {
                return res.json();
            })
            .catch((error:any) => {
                return Observable.throw(error.json ? error.json().error : error || 'Server error')
            });
    }
}
