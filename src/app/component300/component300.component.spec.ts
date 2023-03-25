import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component300Component } from './component300.component';

describe('Component300Component', () => {
  let component: Component300Component;
  let fixture: ComponentFixture<Component300Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component300Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
