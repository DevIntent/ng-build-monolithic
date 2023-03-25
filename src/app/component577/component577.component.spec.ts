import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component577Component } from './component577.component';

describe('Component577Component', () => {
  let component: Component577Component;
  let fixture: ComponentFixture<Component577Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component577Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
