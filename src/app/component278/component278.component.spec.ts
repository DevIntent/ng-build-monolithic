import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component278Component } from './component278.component';

describe('Component278Component', () => {
  let component: Component278Component;
  let fixture: ComponentFixture<Component278Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component278Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
