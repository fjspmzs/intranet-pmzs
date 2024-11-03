import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoalComponent } from './pessoal.component';

describe('PessoalComponent', () => {
  let component: PessoalComponent;
  let fixture: ComponentFixture<PessoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
