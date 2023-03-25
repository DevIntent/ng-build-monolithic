import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component496Component } from './component496.component';

describe('Component496Component', () => {
  let component: Component496Component;
  let fixture: ComponentFixture<Component496Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component496Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
