import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component501Component } from './component501.component';

describe('Component501Component', () => {
  let component: Component501Component;
  let fixture: ComponentFixture<Component501Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component501Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
