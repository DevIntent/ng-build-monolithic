import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component293Component } from './component293.component';

describe('Component293Component', () => {
  let component: Component293Component;
  let fixture: ComponentFixture<Component293Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component293Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
