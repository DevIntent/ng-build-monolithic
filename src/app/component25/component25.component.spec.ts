import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component25Component } from './component25.component';

describe('Component25Component', () => {
  let component: Component25Component;
  let fixture: ComponentFixture<Component25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component25Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
