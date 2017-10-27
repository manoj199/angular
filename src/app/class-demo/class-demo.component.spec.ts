import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDemoComponent } from './class-demo.component';

describe('ClassDemoComponent', () => {
  let component: ClassDemoComponent;
  let fixture: ComponentFixture<ClassDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
