import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component610Component } from './component610.component';

describe('Component610Component', () => {
  let component: Component610Component;
  let fixture: ComponentFixture<Component610Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component610Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
