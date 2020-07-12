import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NotificationService', () => {
  let service: NotificationService;
    
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[],
      providers:[],
      imports:[MatSnackBarModule,BrowserAnimationsModule]
    });
    service = TestBed.inject(NotificationService);    
  });
  
  it('should be created NotificationService', () => {
    expect(service).toBeTruthy();
  });
  it('should be created MatSnackBarConfig', () => {
    expect(service.config).toBeTruthy();
  });
  it('Should be created snackBar',()=>{
    expect(service.snackBar).toBeTruthy();
  });
  it('Should be able to open warn snackBar',()=>{
    service.config['duration'] = 30;
    expect(service.warn('Warning'));
  });
  it('Should be able to open success snackBar',()=>{
    service.config['duration'] = 30;
    expect(service.success('success'));
  })
});
