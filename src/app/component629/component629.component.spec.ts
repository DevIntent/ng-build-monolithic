import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component629Component } from './component629.component';

describe('Component629Component', () => {
  let component: Component629Component;
  let fixture: ComponentFixture<Component629Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component629Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
