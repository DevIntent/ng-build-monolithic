import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component899Component } from './component899.component';

describe('Component899Component', () => {
  let component: Component899Component;
  let fixture: ComponentFixture<Component899Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component899Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
