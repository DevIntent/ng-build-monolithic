import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component742Component } from './component742.component';

describe('Component742Component', () => {
  let component: Component742Component;
  let fixture: ComponentFixture<Component742Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component742Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
