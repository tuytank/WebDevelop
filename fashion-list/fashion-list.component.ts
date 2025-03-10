import { Component,OnInit } from '@angular/core';
import { FashionService } from '../fashion.service';
import { Fashion } from '../models/fashion.model';

@Component({
  selector: 'app-fashion-list',
  imports: [],
  templateUrl: './fashion-list.component.html',
  styleUrl: './fashion-list.component.css'
})
export class FashionListComponent implements OnInit {
  fashions: Fashion[] = [];

  constructor(private fashionService: FashionService) {}

  ngOnInit(): void {
    this.fashionService.getFashions().subscribe(data => {
      this.fashions = data;
    });
  }
}