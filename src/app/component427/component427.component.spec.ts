import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component427Component } from './component427.component';

describe('Component427Component', () => {
  let component: Component427Component;
  let fixture: ComponentFixture<Component427Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component427Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
