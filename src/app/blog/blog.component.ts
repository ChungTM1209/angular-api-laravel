import {Component, OnInit} from '@angular/core';
import {BlogService} from '../blog.service';
import {BlogInterface} from '../blog-interface';
import {Router} from '@angular/router';
import {BlogLists} from '../blog-lists';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    blogList: BlogLists[] = [];
    blog: BlogInterface;

    constructor(private blogService: BlogService,
                private route: Router) {
    }

    ngOnInit() {
        this.getAll();
    }
    getAll() {
        return this.blogService.getBlogs().subscribe(next => (this.blogList = next), error => console.log('error'));
    }

    delete(id: number) {
        if (confirm('Are you want to Delete')) {
            this.blogService.delete(id).subscribe(() => {
                alert('Delete Success');
                this.getAll();
            });
        }
    }
}
