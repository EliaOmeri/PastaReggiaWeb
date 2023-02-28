import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) {}

  images: any[] | undefined;
  url = "http://localhost:3000/images"; 
  
getImages(){
  return this.http.get(this.url) as Observable<any>;
}


}
