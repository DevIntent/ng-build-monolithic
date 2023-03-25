import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component301Component } from './component301.component';

describe('Component301Component', () => {
  let component: Component301Component;
  let fixture: ComponentFixture<Component301Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component301Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
