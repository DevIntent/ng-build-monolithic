import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component821Component } from './component821.component';

describe('Component821Component', () => {
  let component: Component821Component;
  let fixture: ComponentFixture<Component821Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component821Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
