import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component104Component } from './component104.component';

describe('Component104Component', () => {
  let component: Component104Component;
  let fixture: ComponentFixture<Component104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component104Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
