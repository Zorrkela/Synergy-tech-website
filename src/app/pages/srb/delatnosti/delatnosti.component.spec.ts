import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelatnostiComponent } from './delatnosti.component';

describe('DelatnostiComponent', () => {
  let component: DelatnostiComponent;
  let fixture: ComponentFixture<DelatnostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelatnostiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelatnostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
