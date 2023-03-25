import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component97Component } from './component97.component';

describe('Component97Component', () => {
  let component: Component97Component;
  let fixture: ComponentFixture<Component97Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component97Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
