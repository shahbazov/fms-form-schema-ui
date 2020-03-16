import { TestBed } from '@angular/core/testing';
import { LdapRolesService } from './ldap-roles.service';

describe('LdapRolesService', () => {
  let service: LdapRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LdapRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
