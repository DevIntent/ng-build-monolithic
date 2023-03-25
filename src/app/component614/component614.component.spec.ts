import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component614Component } from './component614.component';

describe('Component614Component', () => {
  let component: Component614Component;
  let fixture: ComponentFixture<Component614Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component614Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
