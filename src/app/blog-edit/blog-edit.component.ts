import {Component, OnInit} from '@angular/core';
import {BlogInterface} from '../blog-interface';
import {BlogService} from '../blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-blog-edit',
    templateUrl: './blog-edit.component.html',
    styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
    blog: BlogInterface;
    id = +this.route.snapshot.paramMap.get('id');

    constructor(private blogService: BlogService,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private router: Router) {
    }

    editForm = this.formBuilder.group({
            name: [''],
            email: [''],
            password: ['']
    });

    ngOnInit() {
        this.blogService.getBlogById(this.id).subscribe(next => {
            this.blog = next;
            this.editForm.patchValue({
                name: this.blog.user.name,
                email: this.blog.user.email,
                password: this.blog.user.password
                }
            );
        });
    }

    update() {
        const {value} = this.editForm;
        return this.blogService.update(value, this.id).subscribe(() => (this.router.navigate(['../list'])));
    }

}
