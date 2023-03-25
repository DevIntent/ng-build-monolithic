import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component93Component } from './component93.component';

describe('Component93Component', () => {
  let component: Component93Component;
  let fixture: ComponentFixture<Component93Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component93Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
