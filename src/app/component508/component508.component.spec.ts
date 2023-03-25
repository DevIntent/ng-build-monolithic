import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component508Component } from './component508.component';

describe('Component508Component', () => {
  let component: Component508Component;
  let fixture: ComponentFixture<Component508Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component508Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
