import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageInfoPage } from './page-info.page';

describe('PageInfoPage', () => {
  let component: PageInfoPage;
  let fixture: ComponentFixture<PageInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
