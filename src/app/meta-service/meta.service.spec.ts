import { TestBed } from '@angular/core/testing';

import { Metaservice } from './meta.service';

describe('MetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Metaservice = TestBed.get(Metaservice);
    expect(service).toBeTruthy();
  });
});
