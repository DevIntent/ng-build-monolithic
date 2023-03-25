import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component972Component } from './component972.component';

describe('Component972Component', () => {
  let component: Component972Component;
  let fixture: ComponentFixture<Component972Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component972Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
