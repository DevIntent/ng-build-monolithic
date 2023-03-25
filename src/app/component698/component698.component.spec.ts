import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component698Component } from './component698.component';

describe('Component698Component', () => {
  let component: Component698Component;
  let fixture: ComponentFixture<Component698Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component698Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
