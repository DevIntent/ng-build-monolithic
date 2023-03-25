import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component83Component } from './component83.component';

describe('Component83Component', () => {
  let component: Component83Component;
  let fixture: ComponentFixture<Component83Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component83Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
