import { Injectable } from '@angular/core';
import { ldaproles } from '../../assets/ldaproles';
import { schema } from '../../assets/form-schema';


@Injectable({
  providedIn: 'root'
})
export class LdapRolesService {

  constructor() { }

  getRoles() {
    return ldaproles;
  }

  getSchema() {
    return schema;
  }
}
