import { Component, OnInit } from '@angular/core';
import { FashionService } from '../services/fashion.service';
import { Fashion } from '../models/fashion.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-fashion-list',
  templateUrl: './fashion-list.component.html',
  styleUrls: ['./fashion-list.component.css']
})
export class FashionListComponent implements OnInit {
  fashions: Fashion[] = []; // Mảng chứa danh sách Fashion
  styles: string[] = ['Streetwear', 'Formal', 'Casual']; // Danh sách các Style
  selectedStyle: string = ''; // Biến lưu trữ Style đã chọn

  constructor(private fashionService: FashionService) {}

  ngOnInit(): void {
    this.fetchFashions(); // Gọi API khi component được load
  }

  // Hàm gọi API để lấy danh sách Fashion
  fetchFashions(): void {
    this.fashionService.getFashions().subscribe(data => {
      this.fashions = data;
    });
  }

  // Hàm lọc theo Style
  filterByStyle(): void {
    this.fashionService.getFashions().subscribe(data => {
      this.fashions = this.selectedStyle
        ? data.filter(f => f.style === this.selectedStyle)
        : data;
    });
  }
}
