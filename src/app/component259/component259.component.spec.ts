import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component259Component } from './component259.component';

describe('Component259Component', () => {
  let component: Component259Component;
  let fixture: ComponentFixture<Component259Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component259Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component259Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
