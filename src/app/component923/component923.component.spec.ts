import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component923Component } from './component923.component';

describe('Component923Component', () => {
  let component: Component923Component;
  let fixture: ComponentFixture<Component923Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component923Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
