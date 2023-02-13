import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  sendData() {
    var data = {
      "Year_Decode": "2005"
    }

    this.http.post("https://localhost:5001/api/years/PostYear", data).subscribe(
      data => {
        console.log(data);
      }
    )

  }

}
