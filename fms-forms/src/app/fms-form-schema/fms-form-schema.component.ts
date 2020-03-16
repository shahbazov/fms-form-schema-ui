import { Component, OnInit } from '@angular/core';
import { LdapRolesService } from '../data-service/ldap-roles.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Tile {
 cols: number;
 rows: number;
 text: string;
 border: string;
}

@Component({
  selector: 'app-fms-form-schema',
  templateUrl: './fms-form-schema.component.html',
  styleUrls: ['./fms-form-schema.component.css']
})
export class FmsFormSchemaComponent implements OnInit {
  
  tiles: Tile[] = [
    {text: 'Tile 1', cols: 2, rows: 1 ,border: '3px double purple'},
    {text: 'Tile 2', cols: 2, rows: 1 ,border: '3px double red'},
    {text: 'Tile 3', cols: 2, rows: 1 ,border: '3px double skyblue'},
    {text: 'Tile 4', cols: 2, rows: 1 ,border: '3px double yellow'},
  ];

  ldaproles;
  schema;

  constructor(private ldapRoleService: LdapRolesService) {
    this.ldaproles = ldapRoleService.getRoles();
    this.schema = ldapRoleService.getSchema();

    // this.schema =Object.entries(this.schema);

    this.schema = Object.entries(this.schema.properties);

    // console.log(this.schema);     //A B C
    // for (let entry of this.schema) {
    //   console.log(entry[0]);     //A B C
    // }

  }

  ngOnInit(): void {
  }

}
