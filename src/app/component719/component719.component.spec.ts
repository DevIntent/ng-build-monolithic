import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component719Component } from './component719.component';

describe('Component719Component', () => {
  let component: Component719Component;
  let fixture: ComponentFixture<Component719Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component719Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
