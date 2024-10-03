import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
    categories = [
      {
        name: 'Jwellery',
        images: [
          'assets/img8.jpeg',
          'assets/img2.jpeg',
          'assets/img3.jpeg',
          'assets/img8.jpeg',
          'assets/img3.jpeg',

          // Add more image URLs
        ]
      },
      {
        name: 'Saree',
        images: [
          'assets/img1.jpeg',
          'assets/img5.jpeg',
          'assets/img6.jpeg',
          'assets/img2.jpeg',
          'assets/img3.jpeg',

          // Add more image URLs
        ]
      },
      {
        name: 'Chudi',
        images: [
          'assets/img1.jpeg',
          'assets/img5.jpeg',
          'assets/img6.jpeg',
          'assets/img2.jpeg',
          'assets/img3.jpeg',

          // Add more image URLs
        ]
      },
      {
        name: 'kids',
        images: [
          'assets/img5.jpeg',
          'assets/img5.jpeg',
          'assets/img6.jpeg',
          'assets/img2.jpeg',
          'assets/img3.jpeg',

          // Add more image URLs
        ]
      },
      // Add more categories similarly
    ];
  }
  

