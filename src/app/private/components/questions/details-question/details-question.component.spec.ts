import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsQuestionComponent } from './details-question.component';

describe('DetailsQuestionComponent', () => {
  let component: DetailsQuestionComponent;
  let fixture: ComponentFixture<DetailsQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsQuestionComponent]
    });
    fixture = TestBed.createComponent(DetailsQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
