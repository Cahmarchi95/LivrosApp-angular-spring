import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroUpdateComponent } from './livro-update.component';

describe('LivroUpdateComponent', () => {
  let component: LivroUpdateComponent;
  let fixture: ComponentFixture<LivroUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivroUpdateComponent]
    });
    fixture = TestBed.createComponent(LivroUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
