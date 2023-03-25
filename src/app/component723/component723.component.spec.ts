import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component723Component } from './component723.component';

describe('Component723Component', () => {
  let component: Component723Component;
  let fixture: ComponentFixture<Component723Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component723Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
