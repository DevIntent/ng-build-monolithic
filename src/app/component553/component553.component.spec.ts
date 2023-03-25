import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component553Component } from './component553.component';

describe('Component553Component', () => {
  let component: Component553Component;
  let fixture: ComponentFixture<Component553Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component553Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
