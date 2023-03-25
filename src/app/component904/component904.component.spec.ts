import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component904Component } from './component904.component';

describe('Component904Component', () => {
  let component: Component904Component;
  let fixture: ComponentFixture<Component904Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component904Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
