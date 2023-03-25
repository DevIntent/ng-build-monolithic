import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component210Component } from './component210.component';

describe('Component210Component', () => {
  let component: Component210Component;
  let fixture: ComponentFixture<Component210Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component210Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
