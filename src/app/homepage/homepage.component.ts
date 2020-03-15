import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

constructor() { }
FeaturedCourses = [{
 cardimg: 'https://mdbootstrap.com/img/Photos/Others/images/14.jpg',
 cardtitle: 'C#',
 cardtext: 'C-Sharp is a General-Purpose, Modern and Object-Oriented Programming Language.',
 Buttontext: 'LEARN'
},
{
  cardimg: 'https://mdbootstrap.com/img/Photos/Others/images/15.jpg',
  cardtitle: 'Angular',
  cardtext: 'Angular is a Platform for Building Mobile and Desktop Web Applications.',
  Buttontext: 'LEARN'
},
{
  cardimg: 'https://mdbootstrap.com/img/Photos/Others/images/16.jpg',
  cardtitle: 'ReactJs',
  cardtext: 'Create Interactive UIs with Simple Design Views for Each State in your Application.',
  Buttontext: 'LEARN'
}
];

FeaturedDownloads = [{
  cardimg: 'https://mdbootstrap.com/img/Photos/Others/images/14.jpg',
  cardtitle: 'Angular',
  cardtext: 'Project Developed on Angular Framework using HTML 5, CSS 3 and jQuery.d',
  Buttontext1: 'VIEW',
  Buttontext2: 'DOWNLOAD'
 },
 {
   cardimg: 'https://mdbootstrap.com/img/Photos/Others/images/15.jpg',
   cardtitle: 'C#',
   cardtext: 'Project Covering Key C# Concepts with Simple Examples',
   Buttontext1: 'VIEW',
   Buttontext2: 'DOWNLOAD'
 },
 {
   cardimg: 'https://mdbootstrap.com/img/Photos/Others/images/16.jpg',
   cardtitle: 'ReactJs',
   cardtext: 'Project Developed on React JS using HTML 5, CSS 3 and jQuery.',
   Buttontext1: 'VIEW',
   Buttontext2: 'DOWNLOAD'
 }
 ];
  ngOnInit() {
  }

}
