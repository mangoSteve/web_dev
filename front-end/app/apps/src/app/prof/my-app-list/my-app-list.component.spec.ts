import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppListComponent } from './my-app-list.component';

describe('MyAppListComponent', () => {
  let component: MyAppListComponent;
  let fixture: ComponentFixture<MyAppListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
