import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component554Component } from './component554.component';

describe('Component554Component', () => {
  let component: Component554Component;
  let fixture: ComponentFixture<Component554Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component554Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
