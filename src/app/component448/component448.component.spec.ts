import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component448Component } from './component448.component';

describe('Component448Component', () => {
  let component: Component448Component;
  let fixture: ComponentFixture<Component448Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component448Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
