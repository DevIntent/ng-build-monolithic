import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component605Component } from './component605.component';

describe('Component605Component', () => {
  let component: Component605Component;
  let fixture: ComponentFixture<Component605Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component605Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
