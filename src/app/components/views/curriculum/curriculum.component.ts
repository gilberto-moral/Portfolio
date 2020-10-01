import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']

  
})
export class CurriculumComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {

      // Ancoras
      $('.ancoras a').click(function(e: { preventDefault: () => void; }){
        e.preventDefault();
        var id = $(this).attr('href'),
          targetOffset = $(id).offset().top;
        $('html, body').animate({
          scrollTop: targetOffset - 5
        }, 500);
      });

  }

}
