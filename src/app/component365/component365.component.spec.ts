import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component365Component } from './component365.component';

describe('Component365Component', () => {
  let component: Component365Component;
  let fixture: ComponentFixture<Component365Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component365Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
