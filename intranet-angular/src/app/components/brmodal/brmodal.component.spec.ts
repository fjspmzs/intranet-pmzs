import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BRModalComponent } from './brmodal.component';

describe('BrmodalComponent', () => {
  let component: BRModalComponent;
  let fixture: ComponentFixture<BRModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BRModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BRModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
