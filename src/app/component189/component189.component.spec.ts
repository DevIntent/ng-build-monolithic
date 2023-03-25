import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component189Component } from './component189.component';

describe('Component189Component', () => {
  let component: Component189Component;
  let fixture: ComponentFixture<Component189Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component189Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
