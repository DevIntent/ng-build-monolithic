import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component826Component } from './component826.component';

describe('Component826Component', () => {
  let component: Component826Component;
  let fixture: ComponentFixture<Component826Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component826Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
