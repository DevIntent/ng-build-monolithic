import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component54Component } from './component54.component';

describe('Component54Component', () => {
  let component: Component54Component;
  let fixture: ComponentFixture<Component54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component54Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
