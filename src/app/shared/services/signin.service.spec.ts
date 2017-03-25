/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SigninService } from './signin.service';

describe('Service: Signin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SigninService]
    });
  });

  it('should ...', inject([SigninService], (service: SigninService) => {
    expect(service).toBeTruthy();
  }));
});
