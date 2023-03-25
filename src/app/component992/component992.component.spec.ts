import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component992Component } from './component992.component';

describe('Component992Component', () => {
  let component: Component992Component;
  let fixture: ComponentFixture<Component992Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component992Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
