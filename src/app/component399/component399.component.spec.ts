import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component399Component } from './component399.component';

describe('Component399Component', () => {
  let component: Component399Component;
  let fixture: ComponentFixture<Component399Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component399Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
