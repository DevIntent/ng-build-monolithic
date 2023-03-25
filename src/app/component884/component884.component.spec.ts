import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component884Component } from './component884.component';

describe('Component884Component', () => {
  let component: Component884Component;
  let fixture: ComponentFixture<Component884Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component884Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
