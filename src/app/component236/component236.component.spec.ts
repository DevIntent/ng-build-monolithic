import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component236Component } from './component236.component';

describe('Component236Component', () => {
  let component: Component236Component;
  let fixture: ComponentFixture<Component236Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component236Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
