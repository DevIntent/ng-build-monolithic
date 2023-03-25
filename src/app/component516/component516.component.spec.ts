import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component516Component } from './component516.component';

describe('Component516Component', () => {
  let component: Component516Component;
  let fixture: ComponentFixture<Component516Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component516Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
