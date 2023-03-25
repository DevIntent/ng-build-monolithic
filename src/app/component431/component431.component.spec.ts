import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component431Component } from './component431.component';

describe('Component431Component', () => {
  let component: Component431Component;
  let fixture: ComponentFixture<Component431Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component431Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
