import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component726Component } from './component726.component';

describe('Component726Component', () => {
  let component: Component726Component;
  let fixture: ComponentFixture<Component726Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component726Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
