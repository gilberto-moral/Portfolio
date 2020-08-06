import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.scss']
})
export class WebsitesComponent implements OnInit {

  constructor() {
     
  }

  ngOnInit(): void {

    $(function() {
      $('.trocar').hover(
          function() {
              $(this).children('.front').stop().animate({
                  "top": '220px'
              }, 500); //Trabalha no hoverIn
          },
          function() {
              $(this).children('.front').stop().animate({
                  "top": '0'
              }, 400); //Trabalha no hoverOut
          });
    });

  }


}


