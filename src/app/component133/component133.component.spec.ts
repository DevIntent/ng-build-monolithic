import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component133Component } from './component133.component';

describe('Component133Component', () => {
  let component: Component133Component;
  let fixture: ComponentFixture<Component133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component133Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
