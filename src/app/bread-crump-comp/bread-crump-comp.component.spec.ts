import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumpCompComponent } from './bread-crump-comp.component';

describe('BreadCrumpCompComponent', () => {
  let component: BreadCrumpCompComponent;
  let fixture: ComponentFixture<BreadCrumpCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadCrumpCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadCrumpCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
