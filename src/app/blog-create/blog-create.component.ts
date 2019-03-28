import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {BlogService} from '../blog.service';
import {BlogInterface} from '../blog-interface';
import {Router} from '@angular/router';

@Component({
    selector: 'app-blog-create',
    templateUrl: './blog-create.component.html',
    styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
    blogList: BlogInterface[] = [];
    blogForm = this.fb.group({
        name: [''],
        email: [''],
        password: [''],
    });

    constructor(private fb: FormBuilder,
                private blogService: BlogService,
                private route: Router) {}

    ngOnInit() {
    }

    create() {
        const {value} = this.blogForm;
        return this.blogService.create(value).subscribe(next => {
            this.blogList.unshift(value);
            this.route.navigate(['../list']);
        }, error1 => alert('Input Again'));
    }
}
