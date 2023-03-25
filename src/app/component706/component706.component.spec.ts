import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component706Component } from './component706.component';

describe('Component706Component', () => {
  let component: Component706Component;
  let fixture: ComponentFixture<Component706Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component706Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
