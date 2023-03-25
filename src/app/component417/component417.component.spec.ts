import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component417Component } from './component417.component';

describe('Component417Component', () => {
  let component: Component417Component;
  let fixture: ComponentFixture<Component417Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component417Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
