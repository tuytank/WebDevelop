import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import convertSolar2Lunar from 'viet-lunar-calendar';


@Component({
  selector: 'app-lunar-year',
  imports: [FormsModule,CommonModule],
  templateUrl: './lunar-year.component.html',
  styleUrl: './lunar-year.component.css'
})
export class LunarYearComponent {
  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  years: number[] = Array.from({ length: 150 }, (_, i) => 1920 + i);

  selectedDay = 1;
  selectedMonth = 1;
  selectedYear = 2000;

  lunarDay!: number;
  lunarMonth!: number;
  lunarYear!: number;
  canChiYear!: string;
  canChiMonth!: string;
  canChiDay!: string;
  dayOfWeek!: string;

  chuyenDoi() {
    try {
      // Kiểm tra xem thư viện có hoạt động không
      if (typeof convertSolar2Lunar !== "function") {
        throw new Error("Hàm convertSolar2Lunar không tồn tại hoặc không được import đúng.");
      }
  
      // Gọi hàm chuyển đổi từ thư viện
      const result = this.convertSolar2Lunar(this.selectedDay, this.selectedMonth, this.selectedYear);
  
      // Kiểm tra xem kết quả có hợp lệ không
      if (!result || result.length < 3) {
        throw new Error("Kết quả chuyển đổi không hợp lệ.");
      }
  
      // Gán giá trị chính xác
      this.lunarDay = result[0];
      this.lunarMonth = result[1];
      this.lunarYear = result[2];
  
      // Xác định Can Chi
      this.canChiYear = this.getCanChi(this.lunarYear);
      this.canChiMonth = this.getCanChiMonth(this.lunarYear, this.lunarMonth);
      this.canChiDay = this.getCanChiDay(this.selectedYear, this.selectedMonth, this.selectedDay);
  
      // Xác định thứ trong tuần
      this.dayOfWeek = this.getDayOfWeek(this.selectedYear, this.selectedMonth, this.selectedDay);
    } catch (error) {
      console.error("Lỗi khi chuyển đổi ngày:", error);
    }
  }
  

  /**
   * Hàm chuyển đổi Dương lịch -> Âm lịch
   */
  private convertSolar2Lunar(day: number, month: number, year: number): [number, number, number] {
    const lunarMonths = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    const leapYears = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

    let a = Math.floor((14 - month) / 12);
    let y = year + 4800 - a;
    let m = month + 12 * a - 3;

    let jd = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    let k = Math.floor((jd - 2415021.076998695) / 29.530588853);

    let monthStart = 2415021 + k * 29.530588853;
    let deltaDays = Math.floor(jd - monthStart);

    let lunarMonth = month + (deltaDays < 0 ? -1 : 0);
    let lunarDay = deltaDays + 1;
    let lunarYear = year;

    if (lunarMonth <= 0) {
      lunarMonth += 12;
      lunarYear -= 1;
    }

    return [lunarDay, lunarMonth, lunarYear];
  }

  /**
   * Lấy Can Chi của năm Âm lịch
   */
  private getCanChi(year: number): string {
    const can = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
    const chi = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
    return `${can[year % 10]} ${chi[year % 12]}`;
  }

  /**
 * Lấy Can Chi của tháng Âm lịch
 */
private getCanChiMonth(year: number, month: number): string {
  const can = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
  const chi = ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu"];

  const canIndex = (year * 12 + month + 3) % 10;
  const chiIndex = (month + 1) % 12;

  return `${can[canIndex]} ${chi[chiIndex]}`;
}

/**
 * Lấy Can Chi của ngày Âm lịch
 */
private getCanChiDay(year: number, month: number, day: number): string {
  const can = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
  const chi = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

  const canIndex = (year * 365 + month * 30 + day) % 10;
  const chiIndex = (year * 365 + month * 30 + day) % 12;

  return `${can[canIndex]} ${chi[chiIndex]}`;
}

/**
 * Tính ngày Julian Date từ Dương lịch
 */
private getJulianDate(year: number, month: number, day: number): number {
  return Math.floor((1461 * (year + 4800 + Math.floor((month - 14) / 12))) / 4) +
         Math.floor((367 * (month - 2 - 12 * Math.floor((month - 14) / 12))) / 12) -
         Math.floor((3 * Math.floor((year + 4900 + Math.floor((month - 14) / 12)) / 100)) / 4) +
         day - 32075;
}


  /**
   * Lấy thứ trong tuần từ ngày dương lịch
   */
  private getDayOfWeek(year: number, month: number, day: number): string {
    const daysOfWeek = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    const date = new Date(year, month - 1, day);
    return daysOfWeek[date.getDay()];
  }
}
