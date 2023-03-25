import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component713Component } from './component713.component';

describe('Component713Component', () => {
  let component: Component713Component;
  let fixture: ComponentFixture<Component713Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component713Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
