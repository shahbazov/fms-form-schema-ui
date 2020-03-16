import { Component, OnInit } from '@angular/core';
import { LdapRolesService } from '../data-service/ldap-roles.service';
import { SelectItem } from 'primeng/api';


interface FmsOption {
  name: string;
  code: string;
}

@Component({
  styles:[`
      .box,
      .sample-layout > div {
          background-color: #cce4f7;
          text-align: center;
          padding-top: 1em;
          padding-bottom: 1em;
          border-radius: 4px;
      }

      .box-stretched {
          height: 100%;
      }

      .sample-layout {
          margin: 0;
      }

      .sample-layout > div {
          border: 1px solid #ffffff;
      }

      .vertical-container {
          margin: 0;
          height: 200px;
          background: #efefef;
          border-radius: 4px;
      }

      .nested-grid .p-col-4 {
          padding-bottom: 1em;
      }
  `],
  selector: 'app-primng-example',
  templateUrl: './primng-example.component.html',
  styleUrls: ['./primng-example.component.css']
})
export class PrimngExampleComponent implements OnInit {
  schema;
  schemaDefinitions;
  show: boolean = true
  fmsoptions: SelectItem[];
  selectedCar1: string;

  constructor(private ldapRoleService: LdapRolesService) {
     this.fmsoptions=[
        {label:'Select City', value:null},
        {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
        {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
        {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
        {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
        {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
     ]
     this.schema = ldapRoleService.getSchema();
     // this.schema =Object.entries(this.schema);
     this.schemaDefinitions = Object.entries(this.schema.definitions);

     this.schema = Object.entries(this.schema.properties);
     this.schema.forEach( (entry) => {
       if(entry[1].hasOwnProperty('enum')){
         entry[1].islist=true;
       } else if(entry[1].type=='object'){
         entry[1].isobject=true;
         entry[1].properties=Object.entries(entry[1].properties);
       } else if("#/definitions/FmsEvent"==entry[1]['$ref']){
         entry[1].isdef=true;
         entry[1].fmsevent=true;
       } else if("#/definitions/FmsFunction"==entry[1]['$ref']){
         entry[1].isdef=true;
         entry[1].fmsfunc=true;
       } else if("#/definitions/FmsActions"==entry[1]['$ref']){
         entry[1].isdef=true;
         entry[1].fmsactions=true;
       } else{
         entry[1].istext=true;
       }
     });
  }

  ngOnInit(): void {
  }
}
