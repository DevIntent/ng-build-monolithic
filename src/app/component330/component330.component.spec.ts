import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component330Component } from './component330.component';

describe('Component330Component', () => {
  let component: Component330Component;
  let fixture: ComponentFixture<Component330Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component330Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
