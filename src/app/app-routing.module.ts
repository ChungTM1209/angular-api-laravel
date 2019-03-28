import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {BlogCreateComponent} from './blog-create/blog-create.component';
import {BlogEditComponent} from './blog-edit/blog-edit.component';
const routes: Routes = [{
    path: 'list',
    component: BlogComponent
}, {
    path: 'list/:id',
    component: BlogDetailComponent
}, {
    path: 'list/edit/:id',
    component: BlogEditComponent
}, {
    path: 'create',
    component: BlogCreateComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
