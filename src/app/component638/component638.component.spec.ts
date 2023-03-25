import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component638Component } from './component638.component';

describe('Component638Component', () => {
  let component: Component638Component;
  let fixture: ComponentFixture<Component638Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component638Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
