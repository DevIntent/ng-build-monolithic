import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component226Component } from './component226.component';

describe('Component226Component', () => {
  let component: Component226Component;
  let fixture: ComponentFixture<Component226Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component226Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
