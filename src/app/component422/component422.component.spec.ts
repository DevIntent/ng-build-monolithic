import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component422Component } from './component422.component';

describe('Component422Component', () => {
  let component: Component422Component;
  let fixture: ComponentFixture<Component422Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component422Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
