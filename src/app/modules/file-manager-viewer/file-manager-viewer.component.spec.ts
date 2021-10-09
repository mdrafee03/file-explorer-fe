import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileManagerViewerComponent } from './file-manager-viewer.component';

describe('FileManagerViewerComponent', () => {
  let component: FileManagerViewerComponent;
  let fixture: ComponentFixture<FileManagerViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileManagerViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileManagerViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
