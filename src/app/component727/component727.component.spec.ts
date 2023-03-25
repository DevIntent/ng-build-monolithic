import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component727Component } from './component727.component';

describe('Component727Component', () => {
  let component: Component727Component;
  let fixture: ComponentFixture<Component727Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component727Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
