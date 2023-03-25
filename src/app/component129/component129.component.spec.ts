import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component129Component } from './component129.component';

describe('Component129Component', () => {
  let component: Component129Component;
  let fixture: ComponentFixture<Component129Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component129Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
