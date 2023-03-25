import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component566Component } from './component566.component';

describe('Component566Component', () => {
  let component: Component566Component;
  let fixture: ComponentFixture<Component566Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component566Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
