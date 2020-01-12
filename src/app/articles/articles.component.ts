import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Media } from '../model/media';
import { MediaMetadata } from '../model/media-metadata';
import { Article } from '../model/article';
import { ArticleMeta } from '../model/article-meta';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
    articles: Article[];
    articleMeta: ArticleMeta;

    constructor(private _articlesDataService: ArticleService) { }

    ngOnInit() {
        this._articlesDataService.getArticleMetaFromData().subscribe((data: ArticleMeta) => {
            this.articleMeta = data;
            this.articles = this.articleMeta.results;
        });
    }

}
