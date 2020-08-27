import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-button-card',
  templateUrl: './button-card.component.html',
  styleUrls: ['./button-card.component.scss']
})
export class ButtonCardComponent implements OnInit {

  @Input() title :String;
  @Input() iconName :String;

  constructor() { }

  ngOnInit() {
  }

}
