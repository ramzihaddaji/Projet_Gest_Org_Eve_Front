import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateurDetailsComponent } from './collaborateur-details.component';

describe('CollaborateurDetailsComponent', () => {
  let component: CollaborateurDetailsComponent;
  let fixture: ComponentFixture<CollaborateurDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollaborateurDetailsComponent]
    });
    fixture = TestBed.createComponent(CollaborateurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
