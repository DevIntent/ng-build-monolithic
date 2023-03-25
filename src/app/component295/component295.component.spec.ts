import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component295Component } from './component295.component';

describe('Component295Component', () => {
  let component: Component295Component;
  let fixture: ComponentFixture<Component295Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component295Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
