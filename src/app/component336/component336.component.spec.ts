import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component336Component } from './component336.component';

describe('Component336Component', () => {
  let component: Component336Component;
  let fixture: ComponentFixture<Component336Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component336Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
