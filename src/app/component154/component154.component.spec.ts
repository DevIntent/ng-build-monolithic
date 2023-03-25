import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component154Component } from './component154.component';

describe('Component154Component', () => {
  let component: Component154Component;
  let fixture: ComponentFixture<Component154Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component154Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
