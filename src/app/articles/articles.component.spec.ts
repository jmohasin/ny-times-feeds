import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesComponent } from './articles.component';
import { MaterialModule } from '../material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArticlesComponent', () => {
    let component: ArticlesComponent;
    let fixture: ComponentFixture<ArticlesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ArticlesComponent],
            imports: [MaterialModule, HttpClientTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticlesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
