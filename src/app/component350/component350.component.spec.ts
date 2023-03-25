import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component350Component } from './component350.component';

describe('Component350Component', () => {
  let component: Component350Component;
  let fixture: ComponentFixture<Component350Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component350Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
