import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component360Component } from './component360.component';

describe('Component360Component', () => {
  let component: Component360Component;
  let fixture: ComponentFixture<Component360Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component360Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
