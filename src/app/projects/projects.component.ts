import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Weather App',
      description: 'An application that uses API to fetch weather data for a given city and displays the current weather conditions.',
      link: 'https://github.com/tejasmodhave/Project2',
      image: 'assets/weather-app.png'  // Example image path
    },
    {
      title: 'Tata Basket Clone',
      description: 'A clone of the Tata Basket website built using React. It includes e-commerce features like product display and cart functionality.',
      link: 'https://github.com/tejasmodhave/tatabasket',
      image: 'assets/tata-basket.png'  // Example image path
    },
    {
      title: 'Sketch Using SketchPy and Turtle',
      description: 'A Python-based creative project using SketchPy and Turtle for generating programmatic sketches.',
      link: 'https://github.com/tejasmodhave/Project2',
      image: 'assets/sketch-project.png'  // Example image path
    }
  ];
}
