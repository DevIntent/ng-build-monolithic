import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component482Component } from './component482.component';

describe('Component482Component', () => {
  let component: Component482Component;
  let fixture: ComponentFixture<Component482Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component482Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
