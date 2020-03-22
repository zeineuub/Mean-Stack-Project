import { Component, OnInit } from '@angular/core';
import{ ContactService} from'../contact.service';
import{Contact} from'../contact';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactService]
})
export class ContactsComponent implements OnInit {
  contacts:Contact[];
  contact:Contact;
  firstname:string;
  lastname:string;
  phonenum:string;
  constructor(private ContactService:ContactService) { }
  addContact()
  {
    const newContact={
      firstname:this.firstname,
      lastname:this.lastname,
      phonenum:this.phonenum
    }
    this.ContactService.addContact(newContact)
      .subscribe(contact=>{
        this.contacts.push(contact);

      });
    }

  deleteContact(id:any){
    var contacts=this.contacts;
    this.ContactService.deleteContact(id)
      .subscribe(data=>{
        if(data.n==1)
        {
          for(var i=0;contacts.length;i++)
          {
            if(contacts[i]._id==id)
            {
              contacts.splice(i,1);
            }
          }
        }
      })
  }
  ngOnInit(): void {
    this.ContactService.getContact()
      .subscribe(contacts=>
        this.contacts=contacts);
  }

}
