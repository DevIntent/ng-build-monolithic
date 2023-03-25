import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component145Component } from './component145.component';

describe('Component145Component', () => {
  let component: Component145Component;
  let fixture: ComponentFixture<Component145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component145Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
