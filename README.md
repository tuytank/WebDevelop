# WebDevelop
Tạo một “BindingPropertyComponent”, Type Script (.ts) chứa các Property
(Attribute/Variable) sau:
export class BindingPropertyComponent {
public name:string="Trần Duy Thanh"
public email:string="thanhtd@uel.edu.vn"
public nameid:string="nameid"
public emailid:string="emailid"
public isDisabled:boolean=true
}
HTML sử dụng 2 cách: tạo cấu trúc HTML trong .ts và cấu trúc HTML trong file
HTML để binding các thuộc tính này. Sử dụng cú pháp [] để binding cho name
và {{}} để binding cho email. Thuộc tính isDisabled sẽ thiết lập cho Email, sinh
viên thay đổi true hoặc false để quan sát kết quả.
