import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component922Component } from './component922.component';

describe('Component922Component', () => {
  let component: Component922Component;
  let fixture: ComponentFixture<Component922Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component922Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
