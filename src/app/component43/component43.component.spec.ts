import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component43Component } from './component43.component';

describe('Component43Component', () => {
  let component: Component43Component;
  let fixture: ComponentFixture<Component43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component43Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
