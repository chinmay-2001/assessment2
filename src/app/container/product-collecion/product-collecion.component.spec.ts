import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCollecionComponent } from './product-collecion.component';

describe('ProductCollecionComponent', () => {
  let component: ProductCollecionComponent;
  let fixture: ComponentFixture<ProductCollecionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCollecionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCollecionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
