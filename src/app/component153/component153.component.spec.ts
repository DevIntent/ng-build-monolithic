import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component153Component } from './component153.component';

describe('Component153Component', () => {
  let component: Component153Component;
  let fixture: ComponentFixture<Component153Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component153Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
