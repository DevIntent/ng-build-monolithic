import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component138Component } from './component138.component';

describe('Component138Component', () => {
  let component: Component138Component;
  let fixture: ComponentFixture<Component138Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component138Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
