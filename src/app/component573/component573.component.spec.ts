import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component573Component } from './component573.component';

describe('Component573Component', () => {
  let component: Component573Component;
  let fixture: ComponentFixture<Component573Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component573Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
