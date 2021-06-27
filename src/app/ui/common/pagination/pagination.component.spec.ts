import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    });
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should decrease the offset and refresh on previous when not on the first page', () => {
    spyOn(component.paginate, 'emit');
    component.limit = 25;
    component.offset = 100;
    component.onPrev();
    expect(component.offset).toBe(75);
    expect(component.paginate.emit).toHaveBeenCalledWith({ offset: 75, limit: 25 });
    expect(component.pageNumber).toBe(4);

    component.limit = 25;
    component.offset = 10;
    component.onPrev();
    expect(component.offset).toBe(0);
    expect(component.paginate.emit).toHaveBeenCalledWith({ offset: 0, limit: 25 });
    expect(component.pageNumber).toBe(1);
  });

  it('should not decrease the offset or refresh on previous when on the first page', () => {
    spyOn(component.paginate, 'emit');
    component.limit = 25;
    component.offset = 0;
    component.onPrev();
    expect(component.offset).toBe(0);
    expect(component.paginate.emit).not.toHaveBeenCalled();
    expect(component.pageNumber).toBe(1);
  });

  it('should increase the offset and refresh on next when not on the last page', () => {
    spyOn(component.paginate, 'emit');
    component.limit = 25;
    component.offset = 0;
    component.total = 100;
    component.onNext();
    expect(component.offset).toBe(25);
    expect(component.paginate.emit).toHaveBeenCalledWith({ offset: 25, limit: 25 });
    expect(component.pageNumber).toBe(2);
  });

  it('should not increase the offset or refresh on next when on the last page', () => {
    spyOn(component.paginate, 'emit');
    component.limit = 25;
    component.offset = 75;
    component.total = 100;
    component.onNext();
    expect(component.offset).toBe(75);
    expect(component.paginate.emit).not.toHaveBeenCalled();
    expect(component.pageNumber).toBe(4);
  });

  it('should disable the previous button if on the first page', () => {
    component.total = 100;
    component.limit = 25;
    component.offset = 0;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.previous.disabled')).not.toBeNull();

    component.total = 100;
    component.limit = 25;
    component.offset = 1;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.previous.disabled')).toBeNull();
  });

  it('should disable the next button if on the last page', () => {
    component.total = 100;
    component.limit = 25;
    component.offset = 76;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.next.disabled')).not.toBeNull();

    component.total = 100;
    component.limit = 25;
    component.offset = 75;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.next.disabled')).not.toBeNull();

    component.total = 100;
    component.limit = 25;
    component.offset = 74;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.next.disabled')).toBeNull();
  });

  it('should show correct page number', () => {
    component.total = 100;
    component.offset = 0;
    component.limit = 10;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.current-page').textContent).toBe('1');

    component.offset = 9;
    component.onRefresh();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.current-page').textContent).toBe('1');

    component.offset = 10;
    component.onRefresh();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.current-page').textContent).toBe('2');

    component.offset = 11;
    component.onRefresh();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.current-page').textContent).toBe('2');
  });

});
