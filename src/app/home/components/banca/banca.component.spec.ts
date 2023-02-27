import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancaComponent } from './banca.component';

describe('BancaComponent', () => {
  let component: BancaComponent;
  let fixture: ComponentFixture<BancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
