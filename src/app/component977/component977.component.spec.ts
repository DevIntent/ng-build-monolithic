import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component977Component } from './component977.component';

describe('Component977Component', () => {
  let component: Component977Component;
  let fixture: ComponentFixture<Component977Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component977Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
