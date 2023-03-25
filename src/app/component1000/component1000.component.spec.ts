import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1000Component } from './component1000.component';

describe('Component1000Component', () => {
  let component: Component1000Component;
  let fixture: ComponentFixture<Component1000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component1000Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
