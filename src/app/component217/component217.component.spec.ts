import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component217Component } from './component217.component';

describe('Component217Component', () => {
  let component: Component217Component;
  let fixture: ComponentFixture<Component217Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component217Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
