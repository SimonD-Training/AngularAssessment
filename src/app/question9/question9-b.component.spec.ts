import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question9BComponent } from './question9-b.component';

describe('Question9BComponent', () => {
  let component: Question9BComponent;
  let fixture: ComponentFixture<Question9BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question9BComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question9BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
