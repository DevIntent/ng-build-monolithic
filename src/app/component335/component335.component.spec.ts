import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component335Component } from './component335.component';

describe('Component335Component', () => {
  let component: Component335Component;
  let fixture: ComponentFixture<Component335Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component335Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
