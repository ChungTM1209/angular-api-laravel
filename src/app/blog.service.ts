import {Injectable} from '@angular/core';
import {BlogInterface} from './blog-interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BlogLists} from './blog-lists';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    // readonly API_URL = 'https://laravel-demo-login.herokuapp.com';
    constructor(private httpClient: HttpClient) {
    }

    getBlogs(): Observable<BlogLists[]> {
        return this.httpClient.get<BlogLists[]>('/api/users');
    }

    getBlogById(id: number): Observable<BlogInterface> {
        return this.httpClient.get<BlogInterface>('/api/users/' + id);
    }

    create(blog: Partial<BlogInterface>): Observable<BlogInterface> {
        return this.httpClient.post<BlogInterface>('/api/users/create', blog);
    }

    update(blog: BlogInterface, id: number): Observable<BlogInterface> {
        return this.httpClient.post<BlogInterface>('/api/users/' + id + '/update', blog);
    }

    delete(id: number): Observable<any> {
        return this.httpClient.post<BlogInterface>('/api/users/' + id + '/delete', null);
    }
}
