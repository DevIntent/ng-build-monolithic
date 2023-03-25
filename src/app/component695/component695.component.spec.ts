import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component695Component } from './component695.component';

describe('Component695Component', () => {
  let component: Component695Component;
  let fixture: ComponentFixture<Component695Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component695Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
