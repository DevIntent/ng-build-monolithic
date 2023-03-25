import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component843Component } from './component843.component';

describe('Component843Component', () => {
  let component: Component843Component;
  let fixture: ComponentFixture<Component843Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component843Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
