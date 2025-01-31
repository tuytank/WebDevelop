# WebDevelop
Tạo một component “BindingTwoWayComponent”.
File “binding-two-way.component.ts” định nghĩa:
export class BindingTwoWayComponent {
public name:string=''
public address:string=''
setDefaultAddress(){
this.address='13 đường Hùng Vương'
}
}
File “binding-two-way.component.html” định nghĩa:
<p>binding-two-way works!</p>
<p>Name: <input [(ngModel)]="name" type="text"></p>
<p>Your name:{{name}}</p>
<p>Address:<input [(ngModel)]="address" type="text"></p>
<p>Your address:{{address}}</p>
<button (click)="setDefaultAddress()">Set default</button>
Chạy component và quan sát kết quả.
Mở rộng bổ sung email, số điện thoại, tiến hành binding và chạy lại component,
quan sát kết quả sau khi thay đổi.
