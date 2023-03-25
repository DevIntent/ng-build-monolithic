import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component319Component } from './component319.component';

describe('Component319Component', () => {
  let component: Component319Component;
  let fixture: ComponentFixture<Component319Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component319Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
