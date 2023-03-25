import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component111Component } from './component111.component';

describe('Component111Component', () => {
  let component: Component111Component;
  let fixture: ComponentFixture<Component111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component111Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
