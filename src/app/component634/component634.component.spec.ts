import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component634Component } from './component634.component';

describe('Component634Component', () => {
  let component: Component634Component;
  let fixture: ComponentFixture<Component634Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component634Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
