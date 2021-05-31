import { Component, HostBinding, OnInit } from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.link = "www.google.com";
    this.title = "Google";
    this.votes = 8;
   }

  ngOnInit(): void {
  }

  voteUp():boolean{
   this.votes +=1; 
   return false;
  }

  
  voteDown(){
    this.votes -=1;
    return false;
   }
}
