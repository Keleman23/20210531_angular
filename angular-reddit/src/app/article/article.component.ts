import { Component, HostBinding, OnInit } from '@angular/core';
import {Article} from './article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  article: Article;

  constructor() {
    this.article = new Article('Google', 'www.google.com', 1);
   }

  ngOnInit(): void {
  }

  voteUp():boolean{
   this.article.voteUp(); 
   return false;
  }

  
  voteDown(){
    this.article.voteDown();
    return false;
   }
}