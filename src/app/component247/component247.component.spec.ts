import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component247Component } from './component247.component';

describe('Component247Component', () => {
  let component: Component247Component;
  let fixture: ComponentFixture<Component247Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component247Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
