import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsPageComponent } from './chats-page.component';

describe('ChatsPageComponent', () => {
  let component: ChatsPageComponent;
  let fixture: ComponentFixture<ChatsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
