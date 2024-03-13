//BOM(browser object model) truy vết lịch sử trạng thái hành động thông tin người dùng
// console.log(window);//là 1 đối tượng có nhũng phương thức và thuộc tính lớn nhất
// window.alert("OK");
// console.log(window.innerHeight);//lấy chiều cao của trình duyệt
// console.log(window.innerWidth);//lấy chiều rộng
var tab;
const openTab = () => {
    tab = window.open("https://www.facebook.com/TinDuc04","_blank","width=1000,height=500,left=50,top=60"//mở tab quảng cáo
    );
};
const CloseTab = () => { //đóng tab
    tab.close();
};
// console.log(screen.height);//lấy chiều rộng chiều cao màn hình của bạn
// console.log(screen.width);
// const reload=()=>{
//     location.reload();
// }
// console.log(history);
// // history.forward();
console.log(location);//lấy ra thông tin địa chỉ url

const goback=()=>{
    history.back();//nút quay về
}
//lấy ra thông tin trình duyệt của người dùng cú phát window.navigator, trong navigator có các phương thức , history cũng vậy
// console.log(document);
//cookie dùng để lưu trữ các biến trong 1 khoảng thời gian nhất định, khi load trang sẽ kh mất
// const fullname=prompt("Nhập vào tên");
//     console.log(fullname);
//     document.cookie = `fullname=${fullname};expires=Thu, 01 Jan 10 2025 UTC`;
//hàm tạo cookie có hạn
function Setcookie(cname,cvalue,exday){
    var d=new Date();
    d.setTime(d.getTime()+(exday*24*60*60*1000));
    var expires="expires= "+d.toUTCString();
    document.cookie=cname+"="+cvalue+"; "+expires;
}
const fullname=prompt("Nhập vào tên");
    console.log(fullname);
//   document.cookie = `fullname=${fullname}`;
  Setcookie("Ten",fullname,3);
//   const laycookie=document.cookie; lấy ra giá trị cookie 
  console.log(document.cookie);
