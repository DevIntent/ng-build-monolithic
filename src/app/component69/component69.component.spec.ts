import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component69Component } from './component69.component';

describe('Component69Component', () => {
  let component: Component69Component;
  let fixture: ComponentFixture<Component69Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component69Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
