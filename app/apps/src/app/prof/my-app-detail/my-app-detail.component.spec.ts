import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppDetailComponent } from './my-app-detail.component';

describe('MyAppDetailComponent', () => {
  let component: MyAppDetailComponent;
  let fixture: ComponentFixture<MyAppDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
