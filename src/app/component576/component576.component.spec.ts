import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component576Component } from './component576.component';

describe('Component576Component', () => {
  let component: Component576Component;
  let fixture: ComponentFixture<Component576Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component576Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
