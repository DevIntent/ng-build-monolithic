import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component107Component } from './component107.component';

describe('Component107Component', () => {
  let component: Component107Component;
  let fixture: ComponentFixture<Component107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component107Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
