// const h1_1=document.getElementById("h1-01");  
// console.log(h1_1);//để lấy ra 1 thẻ theo id, kết quả sẽ trả vể 1 phần tử

// const h1_2=document.getElementsByTagName("h1");
// console.log(h1_2);//để lấy ra 1 thẻ theo tên thẻ, kết quả sẽ trả về 1 mảng các object

// for (const iterator of h1_2) {
//     console.log(iterator);
    
// }
// const getclass= document.getElementsByClassName("01");//lấy ra theo tên class, tra về 1 mảng object
// console.log(getclass);
// // for (const iterator of getclass) {
// //     console.log("getclass");
// // }

// const title=document.querySelector(".h");//lấy ra 1 thẻ, theo bộ chọn trong css trả về 1 phần tử
// console.log(title);


// **************QUAN TRỌNG ************/
// LẤY RA TOÀN BỘ THẺ HTML THEO BỘ CHỌN CSS, TRẢ VỀ MẢNG CÁC OBJECT
// const title=document.querySelectorAll("#t1 li a");
// console.log(title);

// const innerH2_01=document.querySelector(".h").innerHTML;//innerHTML để lấy ra nội dung trong thẻ h(html), có thẻ con vẫn lấy
// const innerText=document.querySelector(".h").innerText;// chỉ lấy text kh lấy thẻ con
// console.log(innerH2_01);
// console.log(innerText);

// document.querySelector("#h1-02").innerHTML="Test";// thay đổi nội dung 

// const idh1_01 = document.querySelector("#h1-01");
// // console.log(idh1_01);                                             *************************
// const idh1_02 = idh1_01.getAttribute("id");                //;lấy ra attribute để lưu hoặc làm gì đó
// console.log(idh1_02);

// const idh1_03 = document.querySelector(".t1");
// console.log(idh1_03);

// const idh1_04 = idh1_03.getAttribute("class");
// console.log(idh1_04);

const h11=document.querySelector(".t1");
console.log(h11);
//sửa nội dung trong attribute
h11.setAttribute("class","t3");



