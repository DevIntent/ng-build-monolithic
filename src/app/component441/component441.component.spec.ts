import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component441Component } from './component441.component';

describe('Component441Component', () => {
  let component: Component441Component;
  let fixture: ComponentFixture<Component441Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component441Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
