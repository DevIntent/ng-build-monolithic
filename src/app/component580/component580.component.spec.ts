import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component580Component } from './component580.component';

describe('Component580Component', () => {
  let component: Component580Component;
  let fixture: ComponentFixture<Component580Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component580Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
