import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title: String = '"Hello"';

  list: Array<any> = [
    {id: 1, name: 'Some name'},
    {id: 2, name: 'Soem another name'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
