import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component249Component } from './component249.component';

describe('Component249Component', () => {
  let component: Component249Component;
  let fixture: ComponentFixture<Component249Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component249Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
