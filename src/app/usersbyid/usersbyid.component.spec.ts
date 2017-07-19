import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersbyidComponent } from './usersbyid.component';

describe('UsersbyidComponent', () => {
  let component: UsersbyidComponent;
  let fixture: ComponentFixture<UsersbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
