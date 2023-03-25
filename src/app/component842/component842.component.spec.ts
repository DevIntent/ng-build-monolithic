import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component842Component } from './component842.component';

describe('Component842Component', () => {
  let component: Component842Component;
  let fixture: ComponentFixture<Component842Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component842Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
