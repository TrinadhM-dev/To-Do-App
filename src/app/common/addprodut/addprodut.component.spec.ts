import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodutComponent } from './addprodut.component';

describe('AddprodutComponent', () => {
  let component: AddprodutComponent;
  let fixture: ComponentFixture<AddprodutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddprodutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprodutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
