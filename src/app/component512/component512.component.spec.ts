import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component512Component } from './component512.component';

describe('Component512Component', () => {
  let component: Component512Component;
  let fixture: ComponentFixture<Component512Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component512Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
