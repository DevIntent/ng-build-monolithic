import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component121Component } from './component121.component';

describe('Component121Component', () => {
  let component: Component121Component;
  let fixture: ComponentFixture<Component121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component121Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
