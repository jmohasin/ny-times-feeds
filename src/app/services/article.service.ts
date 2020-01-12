
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleMeta } from '../model/article-meta';


@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    private baseUrl = `http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=YOUR_API_KEY`;

    constructor(private http: HttpClient) { }

    getArticleMetaFromData(): Observable<ArticleMeta> {
        const headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return this.http.get<ArticleMeta>(this.baseUrl, { headers: headers });
    }
}
