import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component683Component } from './component683.component';

describe('Component683Component', () => {
  let component: Component683Component;
  let fixture: ComponentFixture<Component683Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component683Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
