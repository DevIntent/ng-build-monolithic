import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component110Component } from './component110.component';

describe('Component110Component', () => {
  let component: Component110Component;
  let fixture: ComponentFixture<Component110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component110Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
