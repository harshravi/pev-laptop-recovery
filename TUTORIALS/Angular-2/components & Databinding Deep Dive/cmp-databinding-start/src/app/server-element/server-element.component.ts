import { Component, OnInit, Input, ViewEncapsulation, 
  OnChanges, SimpleChanges, ViewChild, ElementRef, 
  ContentChild, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit {
  @Input() element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
    console.log('constructor called')
    // console.log('Text Content: '+this.header.nativeElement.textContent);
    //console.log('Paragraph Content' + this.paragraph.nativeElement.textContent);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngChanges Called!');
    console.log(changes);
    console.log(changes);
  }
  ngAfterViewInit() {
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }
  ngAfterContentInit() {
    console.log('Paragraph Content' + this.paragraph.nativeElement.textContent);
  }
}
