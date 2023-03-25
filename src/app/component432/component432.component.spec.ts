import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component432Component } from './component432.component';

describe('Component432Component', () => {
  let component: Component432Component;
  let fixture: ComponentFixture<Component432Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component432Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
