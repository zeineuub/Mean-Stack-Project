import { Injectable } from '@angular/core';
// for http requests
import{Http,Headers} from '@angular/http';
//touse schema
import{Contact} from './contact';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: Http) { }
  //retrieving contacts
  getContact(){
    return this.http.get('http://localhost:5000/api/contacts  ')
     .map(res=>res.json());

  }
  //add contact methode
  addContact(newContact){
    var headers= new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:5000/api/contact', newContact,{headers:headers})
    .map(res=>res.json());

  }
  //delete Contact
  deleteContact(id){
    return this.http.delete('http://localhost:5000/api/contact'+id)
    .map(res=>res.json());

  }
}
