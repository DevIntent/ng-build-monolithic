import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component793Component } from './component793.component';

describe('Component793Component', () => {
  let component: Component793Component;
  let fixture: ComponentFixture<Component793Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component793Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
