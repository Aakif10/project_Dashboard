import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})


export class PostsComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {
  }

}
