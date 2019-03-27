import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPreviewPage } from './print-preview.page';

describe('PrintPreviewPage', () => {
  let component: PrintPreviewPage;
  let fixture: ComponentFixture<PrintPreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPreviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
