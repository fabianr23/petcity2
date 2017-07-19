import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationByIdComponent } from './publication-by-id.component';

describe('PublicationByIdComponent', () => {
  let component: PublicationByIdComponent;
  let fixture: ComponentFixture<PublicationByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
