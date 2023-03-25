import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component281Component } from './component281.component';

describe('Component281Component', () => {
  let component: Component281Component;
  let fixture: ComponentFixture<Component281Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component281Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
