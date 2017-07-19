import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2PaginationModule} from 'ng2-pagination';
import { Angular2TokenService } from 'angular2-token';
import { AppComponent } from './app.component';
import { PostListComponent } from './post/post-list.component';
import { PostService } from './post/post.service';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { TiendaComponent } from './tienda/tienda.component';
import { TiendaService } from './tienda/tienda.service';
import { ApiService } from './api.service';
import { ProductComponent } from './tienda/product.component';
import { CategorybyidComponent } from './categorybyid/categorybyid.component';
import { CategoryComponent } from './category/category.component';
import { ProductNewComponent } from './tienda/product-new.component';
import { PublicationComponent } from './publication/publication.component';
import { BlogComponent } from './publication/blog.component';
import { BlogNewComponent } from './publication/blog-new.component';
import { PublicationService } from './publication/publication.service';
import { LoginFormComponent } from './authentication/loginform.component';
import { RegisterFormComponent } from './authentication/loginregister.component';
import { AuthService } from "./auth.service";
import { CompanyComponent } from './company/company.component';
import { UsersComponent } from './users/users.component';
import { UsersbyidComponent } from './usersbyid/usersbyid.component';
import { CompaniesComponent } from './companies/companies.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileProductsComponent } from './profile/profile-products.component';
import { ProfileProductsLikesComponent } from './profile/profile-products-likes.component';
import { ProfileProductsCommentsComponent } from './profile/profile-products-comment.component';
import { ProfileMyPublicationsComponent } from "./profile/profile-mypublications.component";
import { ProfilePublicationsLikesComponent } from './profile/profile-publications-likes.component';
import { ProfilePublicationsCommentsComponent } from './profile/profile-publications-comments.component';
import { ProfileMenuComponent } from './profile/profile-menu.component';
import { AdminUserComponent } from './admin/adminUser.component';
import { AdminCompanyComponent } from './admin/adminCompany.component';
import { AdminProductComponent } from './admin/adminProducts.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HomepageComponent,
    ContactComponent,
    ProductComponent,
    ProductNewComponent,
    TiendaComponent,
    BlogNewComponent,
    BlogComponent,
    CategoryComponent,
    CategorybyidComponent,
    PublicationComponent,
    CompanyComponent,
    CompaniesComponent,
    LoginFormComponent,
    CompaniesComponent,
    CompanyComponent,
    AdminUserComponent,
    AdminCompanyComponent,
    AdminProductComponent,
    ProfileComponent,
    ProfileProductsComponent,
    ProfileProductsLikesComponent,
    ProfileProductsCommentsComponent,
    ProfileMyPublicationsComponent,
    ProfilePublicationsLikesComponent,
    ProfilePublicationsCommentsComponent,
    ProfileMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    Ng2PaginationModule
  ],
  providers: [
    TiendaService,
    PublicationService,
    PostService,
    ApiService,
    Angular2TokenService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
