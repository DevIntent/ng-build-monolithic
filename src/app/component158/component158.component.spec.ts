import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component158Component } from './component158.component';

describe('Component158Component', () => {
  let component: Component158Component;
  let fixture: ComponentFixture<Component158Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component158Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
