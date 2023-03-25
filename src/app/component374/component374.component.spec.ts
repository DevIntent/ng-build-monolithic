import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component374Component } from './component374.component';

describe('Component374Component', () => {
  let component: Component374Component;
  let fixture: ComponentFixture<Component374Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component374Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
