import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component503Component } from './component503.component';

describe('Component503Component', () => {
  let component: Component503Component;
  let fixture: ComponentFixture<Component503Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component503Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
