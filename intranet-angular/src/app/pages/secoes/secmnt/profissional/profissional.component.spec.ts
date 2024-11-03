import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfisionalComponent } from './profisional.component';

describe('ProfisionalComponent', () => {
  let component: ProfisionalComponent;
  let fixture: ComponentFixture<ProfisionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfisionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfisionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
