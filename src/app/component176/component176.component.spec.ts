import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component176Component } from './component176.component';

describe('Component176Component', () => {
  let component: Component176Component;
  let fixture: ComponentFixture<Component176Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component176Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
