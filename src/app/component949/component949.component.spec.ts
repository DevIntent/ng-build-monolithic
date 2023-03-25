import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component949Component } from './component949.component';

describe('Component949Component', () => {
  let component: Component949Component;
  let fixture: ComponentFixture<Component949Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component949Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
