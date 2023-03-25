import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component974Component } from './component974.component';

describe('Component974Component', () => {
  let component: Component974Component;
  let fixture: ComponentFixture<Component974Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component974Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
