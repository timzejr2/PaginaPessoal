import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItensComponent } from './post-itens.component';

describe('PostItensComponent', () => {
  let component: PostItensComponent;
  let fixture: ComponentFixture<PostItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
