import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component59Component } from './component59.component';

describe('Component59Component', () => {
  let component: Component59Component;
  let fixture: ComponentFixture<Component59Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component59Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
