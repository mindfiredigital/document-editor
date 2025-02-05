import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorFooterComponent } from './editor-footer.component';

describe('EditorFooterComponent', () => {
  let component: EditorFooterComponent;
  let fixture: ComponentFixture<EditorFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
