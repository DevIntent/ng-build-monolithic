import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component137Component } from './component137.component';

describe('Component137Component', () => {
  let component: Component137Component;
  let fixture: ComponentFixture<Component137Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component137Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
