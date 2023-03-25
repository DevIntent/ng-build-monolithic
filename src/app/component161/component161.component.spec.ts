import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component161Component } from './component161.component';

describe('Component161Component', () => {
  let component: Component161Component;
  let fixture: ComponentFixture<Component161Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component161Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
