# WebDevelop
Tạo một “BindingEventComponent” component.
File Type Script “binding-event.component.ts” định nghĩa 2 sự kiện:
export class BindingEventComponent {
onClick(event:any){
alert(event.pointerId)
}
onSubmit(value:string){
alert(value)
}
}
File “binding-event.component.html” định nghĩa và binding event:
<p>binding-event works!</p>
<button (click)="onClick($event)">Click Me</button>
Name:
<input type="text" #myName>
<button (click)="onSubmit(myName.value)">Submit</button>
Chạy component và quan sát kết quả.
Mở rộng: Chỉnh sửa giao diện cho người dùng nhập 2 số a, b bất kỳ và 5 button:
Button cộng: xử lý xuất kết quả tổng a+b
Button trừ: xử lý xuất kết quả hiệu a-b
Button nhân: xử lý xuất kết quả tích a*b
Button chia: xử lý xuất kết quả thương a/b, lưu ý xử lý mẫu số =0
Button xóa trắng: Xóa dữ liệu trên giao diện.
Chạy component để kiểm tra kết quả sau khi chỉnh sửa.
