import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component233Component } from './component233.component';

describe('Component233Component', () => {
  let component: Component233Component;
  let fixture: ComponentFixture<Component233Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component233Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
