import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Params} from '@angular/router';
import {ArticleService} from '../services/article.service';

@Component({
  selector: 'app-noticias-info',
  templateUrl: './noticias-info.component.html',
  styleUrls: ['./noticias-info.component.css']
})
export class NoticiasInfoComponent implements OnInit {
  articleId;
  article;
  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => {
      this.articleId = params.get('id');
      this.articleService.getArticleById(this.articleId).subscribe(article => this.article = article);
    });
  }

}
