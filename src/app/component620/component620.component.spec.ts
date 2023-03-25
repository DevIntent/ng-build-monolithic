import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component620Component } from './component620.component';

describe('Component620Component', () => {
  let component: Component620Component;
  let fixture: ComponentFixture<Component620Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component620Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
