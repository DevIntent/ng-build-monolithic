import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component964Component } from './component964.component';

describe('Component964Component', () => {
  let component: Component964Component;
  let fixture: ComponentFixture<Component964Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component964Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
