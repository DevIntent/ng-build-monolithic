import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component363Component } from './component363.component';

describe('Component363Component', () => {
  let component: Component363Component;
  let fixture: ComponentFixture<Component363Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component363Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
