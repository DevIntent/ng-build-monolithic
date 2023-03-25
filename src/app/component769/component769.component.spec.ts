import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component769Component } from './component769.component';

describe('Component769Component', () => {
  let component: Component769Component;
  let fixture: ComponentFixture<Component769Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component769Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
