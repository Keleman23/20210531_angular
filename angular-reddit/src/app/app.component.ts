import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';
  articles: Article[];

  constructor(){
    this.articles = [
      new Article('Google', "www.google.com", "author1", 4),
      new Article('Angular', "www.angular.io", "author2", 5),
      new Article('gitHub', "www.githaub.com", "author3", 1),
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement, author: HTMLInputElement): boolean{
    console.log(`Adding new article, title: ${title.value} link: ${link.value} author: ${author.value}`);
    this.articles.push(new Article(title.value, link.value, author.value));

    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(sorting: HTMLInputElement): Article[] {
    console.log(`sorting ${sorting}`);
    if (sorting.checked == false){
      return this.articles.sort((a:Article, b:Article) =>b.votes - a.votes);
    }else{
      return this.articles.sort((a:Article, b:Article) =>a.votes - b.votes);
    }
  }
}
