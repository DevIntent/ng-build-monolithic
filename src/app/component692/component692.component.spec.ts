import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component692Component } from './component692.component';

describe('Component692Component', () => {
  let component: Component692Component;
  let fixture: ComponentFixture<Component692Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component692Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
