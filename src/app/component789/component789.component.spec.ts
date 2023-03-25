import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component789Component } from './component789.component';

describe('Component789Component', () => {
  let component: Component789Component;
  let fixture: ComponentFixture<Component789Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component789Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
