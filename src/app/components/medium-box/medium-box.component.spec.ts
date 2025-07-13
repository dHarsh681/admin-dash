import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumBoxComponent } from './medium-box.component';

describe('MediumBoxComponent', () => {
  let component: MediumBoxComponent;
  let fixture: ComponentFixture<MediumBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
