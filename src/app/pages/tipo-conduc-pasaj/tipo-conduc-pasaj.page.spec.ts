import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoConducPasajPage } from './tipo-conduc-pasaj.page';

describe('TipoConducPasajPage', () => {
  let component: TipoConducPasajPage;
  let fixture: ComponentFixture<TipoConducPasajPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoConducPasajPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
