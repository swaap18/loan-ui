import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[NotificationService],
      providers:[],
      imports:[]
    });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should call success metod',()=>{
    expect(service.success('Success')).toHaveBeenCalled();
  })
  it('Should call success metod',()=>{
    expect(service.success('Warn')).toHaveBeenCalled();
  })
  it('Should call success metod',()=>{
    expect(service.snackBar).toBeTruthy();
  })
  it('Should call success metod',()=>{
    expect(service.config).toBeTruthy();
  })
});
