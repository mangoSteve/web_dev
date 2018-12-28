import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetailComponent } from './update-detail.component';

describe('UpdateDetailComponent', () => {
  let component: UpdateDetailComponent;
  let fixture: ComponentFixture<UpdateDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
