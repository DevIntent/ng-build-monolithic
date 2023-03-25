import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component403Component } from './component403.component';

describe('Component403Component', () => {
  let component: Component403Component;
  let fixture: ComponentFixture<Component403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component403Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
