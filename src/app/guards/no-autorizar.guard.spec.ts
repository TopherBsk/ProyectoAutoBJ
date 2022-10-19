import { TestBed } from '@angular/core/testing';

import { NoAutorizarGuard } from './no-autorizar.guard';

describe('NoAutorizarGuard', () => {
  let guard: NoAutorizarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoAutorizarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
