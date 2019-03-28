import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {ActivatedRoute, Route} from '@angular/router';
import {BlogInterface} from '../blog-interface';
import {Location} from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: BlogInterface;
  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getBlogById();
  }
   getBlogById() {
     const id = + this.route.snapshot.paramMap.get('id');
     this.blogService.getBlogById(id).subscribe(next => (this.blog = next));
   }

    goBack() {
        this.location.back();
    }
}
