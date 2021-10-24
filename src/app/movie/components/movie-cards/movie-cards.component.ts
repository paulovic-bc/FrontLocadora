import { Component, Input, OnInit } from '@angular/core';

import { FilmeModel } from 'src/app/model/filme.model';


@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css']
})

export class MovieCardsComponent implements OnInit {

  constructor() { }
  @Input() filme: FilmeModel = {};
  ngOnInit(): void {
  }

}
