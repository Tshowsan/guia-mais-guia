import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarImagemPage } from './alterar-imagem.page';

describe('AlterarImagemPage', () => {
  let component: AlterarImagemPage;
  let fixture: ComponentFixture<AlterarImagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarImagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarImagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
