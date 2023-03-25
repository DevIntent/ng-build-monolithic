import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component650Component } from './component650.component';

describe('Component650Component', () => {
  let component: Component650Component;
  let fixture: ComponentFixture<Component650Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component650Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
