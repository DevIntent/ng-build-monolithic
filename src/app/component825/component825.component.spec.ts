import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component825Component } from './component825.component';

describe('Component825Component', () => {
  let component: Component825Component;
  let fixture: ComponentFixture<Component825Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component825Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
