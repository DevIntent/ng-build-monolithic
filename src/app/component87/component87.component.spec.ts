import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component87Component } from './component87.component';

describe('Component87Component', () => {
  let component: Component87Component;
  let fixture: ComponentFixture<Component87Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component87Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
