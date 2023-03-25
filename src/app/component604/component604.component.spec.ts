import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component604Component } from './component604.component';

describe('Component604Component', () => {
  let component: Component604Component;
  let fixture: ComponentFixture<Component604Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component604Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
