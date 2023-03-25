import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component587Component } from './component587.component';

describe('Component587Component', () => {
  let component: Component587Component;
  let fixture: ComponentFixture<Component587Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component587Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
