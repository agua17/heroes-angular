import { Component,OnInit } from '@angular/core';
import { PostService } from './services/post.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  posts: Object | undefined;

  constructor(private service:PostService) {}
  
  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
          console.log(response);
        });
  }

}
