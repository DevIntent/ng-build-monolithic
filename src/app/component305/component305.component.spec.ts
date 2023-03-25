import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component305Component } from './component305.component';

describe('Component305Component', () => {
  let component: Component305Component;
  let fixture: ComponentFixture<Component305Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component305Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
