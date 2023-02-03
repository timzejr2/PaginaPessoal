import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './pages/blog/blog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { PostComponent } from './pages/post/post.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { PictureComponent } from './components/picture/picture.component';
import { VideoComponent } from './components/video/video.component';
import { LinkComponent } from './components/link/link.component';
import { PostService } from './services/post.service';
import { CommonModule } from '@angular/common';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { PostItensComponent } from './components/post-itens/post-itens.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { HomeProjectsComponent } from './components/home-projects/home-projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BannerComponent } from './components/banner/banner.component';
import { WebglComponent } from './components/webgl/webgl.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    BlogComponent,
    NavbarComponent,
    ResumeComponent,
    ProjectsComponent,
    FooterComponent,
    ProjectCardComponent,
    BlogCardComponent,
    PostComponent,
    ParagraphComponent,
    PictureComponent,
    VideoComponent,
    LinkComponent,
    SubtitleComponent,
    PostItensComponent,
    PresentationComponent,
    HomeProjectsComponent,
    SkillsComponent,
    BannerComponent,
    WebglComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [HttpClientModule, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
