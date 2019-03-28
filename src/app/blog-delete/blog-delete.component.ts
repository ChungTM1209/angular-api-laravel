import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-delete',
  templateUrl: './blog-delete.component.html',
  styleUrls: ['./blog-delete.component.css']
})
export class BlogDeleteComponent implements OnInit {

  constructor(private blogService: BlogService,
              private route: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    confirm('Are you want to Delete');
    const id = + this.activatedRoute.snapshot.paramMap.get('id');
    this.blogService.delete(id).subscribe(() => {
      this.route.navigate(['../list']);
    });
  }

}
