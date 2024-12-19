import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdiosComponent } from './adios.component';

describe('AdiosComponent', () => {
  let component: AdiosComponent;
  let fixture: ComponentFixture<AdiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
