import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component353Component } from './component353.component';

describe('Component353Component', () => {
  let component: Component353Component;
  let fixture: ComponentFixture<Component353Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component353Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
