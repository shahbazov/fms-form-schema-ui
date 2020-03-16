import { Component, OnInit } from '@angular/core';
import { LdapRolesService } from '../data-service/ldap-roles.service';

@Component({
  selector: 'app-plain-example',
  templateUrl: './plain-example.component.html',
  styleUrls: ['./plain-example.component.css']
})
export class PlainExampleComponent implements OnInit {

  value: Date;
  checked: true;

  ldaproles;

  constructor(private ldapRoleService: LdapRolesService) {
    this.ldaproles = ldapRoleService.getRoles();
  }

  share() {
    window.alert('The product has been shared!');
  }

  ngOnInit(): void {
  }

}
