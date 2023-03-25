import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component835Component } from './component835.component';

describe('Component835Component', () => {
  let component: Component835Component;
  let fixture: ComponentFixture<Component835Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component835Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
