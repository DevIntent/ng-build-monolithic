import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component989Component } from './component989.component';

describe('Component989Component', () => {
  let component: Component989Component;
  let fixture: ComponentFixture<Component989Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component989Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
