import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component392Component } from './component392.component';

describe('Component392Component', () => {
  let component: Component392Component;
  let fixture: ComponentFixture<Component392Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component392Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
