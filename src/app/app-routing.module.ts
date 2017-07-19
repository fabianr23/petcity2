import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post/post-list.component';


import { HomepageComponent } from './homepage/homepage.component';


import { ContactComponent  } from './contact/contact.component';


import { TiendaComponent } from './tienda/tienda.component';


import { CompanyComponent } from './company/company.component';


import { ProductComponent } from './tienda/product.component';


import { CategoryComponent } from './category/category.component';


import { CategorybyidComponent } from './categorybyid/categorybyid.component';


import { ProductNewComponent } from './tienda/product-new.component';


import { BlogComponent } from './publication/blog.component';


import { PublicationComponent } from './publication/publication.component';


import { BlogNewComponent } from './publication/blog-new.component';


import { UsersComponent } from './users/users.component';


import { CompaniesComponent } from './companies/companies.component';


import { LoginFormComponent } from './authentication/loginform.component';


import { RegisterFormComponent } from './authentication/loginregister.component';

import { AdminUserComponent } from './admin/adminUser.component';

import { AdminCompanyComponent } from './admin/adminCompany.component';

import { AdminProductComponent } from './admin/adminProducts.component';

import { ProfileComponent } from "./profile/profile.component";

import { ProfileProductsComponent} from "./profile/profile-products.component";

import { ProfileProductsLikesComponent} from "./profile/profile-products-likes.component";

import { ProfileProductsCommentsComponent} from "./profile/profile-products-comment.component";

import { ProfileMyPublicationsComponent } from "./profile/profile-mypublications.component";

import { ProfilePublicationsLikesComponent } from './profile/profile-publications-likes.component';

import { ProfilePublicationsCommentsComponent } from './profile/profile-publications-comments.component';



const routes: Routes = [


    { path: '', redirectTo: '/home', pathMatch: 'full'},


    { path: 'home', component: HomepageComponent },


    { path: 'posts', component: PostListComponent},


    { path: 'contact', component: ContactComponent },


    { path: 'products', component: TiendaComponent },


    { path: 'companies', component: CompaniesComponent },


    { path: 'companies/:id', component: CompanyComponent },

    { path: 'products/new', component: ProductNewComponent },

    { path: 'products/:id', component: ProductComponent },

    { path: 'categories', component: CategoryComponent },

    { path: 'categories/:id', component: CategorybyidComponent },

    { path: 'blog', component: PublicationComponent },

    { path: 'blog/new', component: BlogNewComponent },

    { path: 'blog/:id', component: BlogComponent },

    { path: 'admin-user', component: AdminUserComponent },

    { path: 'admin-company', component: AdminCompanyComponent },

    { path: 'admin-products', component: AdminProductComponent },

      { path: 'login', component: LoginFormComponent },

     { path: 'profile', component: ProfileComponent},
     { path: 'profile/products', component: ProfileProductsComponent},
     { path: 'profile/products/likes', component: ProfileProductsLikesComponent},
     { path: 'profile/products/comments', component: ProfileProductsCommentsComponent},
     { path: 'profile/publications', component: ProfileMyPublicationsComponent},
     { path: 'profile/publications/likes', component: ProfilePublicationsLikesComponent},
     { path: 'profile/publications/comments', component: ProfilePublicationsCommentsComponent},
     
]


@NgModule({

    imports: [ RouterModule.forRoot(routes)],

    exports: [ RouterModule ]

})


export class AppRoutingModule {
}
