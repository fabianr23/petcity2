import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorybyidComponent } from './categorybyid.component';

describe('CategorybyidComponent', () => {
  let component: CategorybyidComponent;
  let fixture: ComponentFixture<CategorybyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorybyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorybyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
