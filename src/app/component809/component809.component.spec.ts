import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component809Component } from './component809.component';

describe('Component809Component', () => {
  let component: Component809Component;
  let fixture: ComponentFixture<Component809Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component809Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
