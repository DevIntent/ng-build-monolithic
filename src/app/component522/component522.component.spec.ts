import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component522Component } from './component522.component';

describe('Component522Component', () => {
  let component: Component522Component;
  let fixture: ComponentFixture<Component522Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component522Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
