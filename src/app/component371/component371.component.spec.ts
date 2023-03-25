import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component371Component } from './component371.component';

describe('Component371Component', () => {
  let component: Component371Component;
  let fixture: ComponentFixture<Component371Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component371Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
