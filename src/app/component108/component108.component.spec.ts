import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component108Component } from './component108.component';

describe('Component108Component', () => {
  let component: Component108Component;
  let fixture: ComponentFixture<Component108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component108Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
