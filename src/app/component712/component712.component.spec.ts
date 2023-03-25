import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component712Component } from './component712.component';

describe('Component712Component', () => {
  let component: Component712Component;
  let fixture: ComponentFixture<Component712Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component712Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
