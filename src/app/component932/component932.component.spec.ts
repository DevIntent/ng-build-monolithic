import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component932Component } from './component932.component';

describe('Component932Component', () => {
  let component: Component932Component;
  let fixture: ComponentFixture<Component932Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component932Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
