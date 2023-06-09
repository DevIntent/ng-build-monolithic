import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component26Component } from './component26.component';

describe('Component26Component', () => {
  let component: Component26Component;
  let fixture: ComponentFixture<Component26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component26Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
