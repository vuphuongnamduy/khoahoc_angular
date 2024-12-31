import { TestBed } from '@angular/core/testing';
import { MyInterceptor } from './interceptor.service';
// import { InterceptorService } from './interceptor.service';
describe('InterceptorService', () => {
  let service: MyInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
