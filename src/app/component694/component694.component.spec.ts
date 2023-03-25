import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component694Component } from './component694.component';

describe('Component694Component', () => {
  let component: Component694Component;
  let fixture: ComponentFixture<Component694Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component694Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
