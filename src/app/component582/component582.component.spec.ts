import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component582Component } from './component582.component';

describe('Component582Component', () => {
  let component: Component582Component;
  let fixture: ComponentFixture<Component582Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component582Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component582Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
