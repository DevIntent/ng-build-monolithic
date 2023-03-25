import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component495Component } from './component495.component';

describe('Component495Component', () => {
  let component: Component495Component;
  let fixture: ComponentFixture<Component495Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component495Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
