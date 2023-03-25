import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component172Component } from './component172.component';

describe('Component172Component', () => {
  let component: Component172Component;
  let fixture: ComponentFixture<Component172Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component172Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
