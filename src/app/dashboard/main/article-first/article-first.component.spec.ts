import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFirstComponent } from './article-first.component';

describe('ArticleFirstComponent', () => {
  let component: ArticleFirstComponent;
  let fixture: ComponentFixture<ArticleFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
