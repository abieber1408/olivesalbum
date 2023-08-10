import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlivesCardComponent } from './olives-card.component';

describe('OlivesCardComponent', () => {
  let component: OlivesCardComponent;
  let fixture: ComponentFixture<OlivesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OlivesCardComponent]
    });
    fixture = TestBed.createComponent(OlivesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
