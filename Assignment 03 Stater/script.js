'use strict';
const button1=document.querySelector('.button--1');
const infor1=document.querySelector('.infor1');
const input1=document.querySelector('.input---0');


button1.addEventListener('click',function(){
  infor1.classList.remove('hidden');
  input1.classList.add('hidden');
});

// Lấy các phần tử HTML cần sử dụng
    const toggleButton = document.getElementById("toggleButton");
    const info = document.getElementById("info");

    // Ẩn phần "info" ban đầu
    info.style.display = "none";

    // Thêm sự kiện click vào nút "View More/View Less"
    toggleButton.addEventListener("click", () => {
      // Kiểm tra trạng thái hiển thị của phần "info"
      if (info.style.display === "none") {
        // Hiện nội dung và đổi nút thành "View Less"
        info.style.display = "block";
        toggleButton.textContent = "View Less";
      } else {
        // Ẩn nội dung và đổi nút thành "View More"
        info.style.display = "none";
        toggleButton.textContent = "View More";
      }
    });



    // Lấy các phần tử HTML cần sử dụng
    const toggleButton1 = document.getElementById("toggleButton1");
    const info1 = document.getElementById("info1");

    // Ẩn phần "info" ban đầu
    info1.style.display = "none";

    // Thêm sự kiện click vào nút "View More/View Less"
    toggleButton1.addEventListener("click", () => {
      // Kiểm tra trạng thái hiển thị của phần "info"
      if (info1.style.display === "none") {
        // Hiện nội dung và đổi nút thành "View Less"
        info1.style.display = "block";
        toggleButton1.textContent = "View Less";
      } else {
        // Ẩn nội dung và đổi nút thành "View More"
        info1.style.display = "none";
        toggleButton1.textContent = "View More";
      }
    });



     // Lấy các phần tử HTML cần sử dụng
     const toggleButton2 = document.getElementById("toggleButton2");
     const info2 = document.getElementById("info2");
 
     // Ẩn phần "info" ban đầu
     info2.style.display = "none";
 
     // Thêm sự kiện click vào nút "View More/View Less"
     toggleButton2.addEventListener("click", () => {
       // Kiểm tra trạng thái hiển thị của phần "info"
       if (info2.style.display === "none") {
         // Hiện nội dung và đổi nút thành "View Less"
         info2.style.display = "block";
         toggleButton1.textContent = "View Less";
       } else {
         // Ẩn nội dung và đổi nút thành "View More"
         info2.style.display = "none";
         toggleButton2.textContent = "View More";
       }
     });


      // Lấy các phần tử HTML cần sử dụng
      const toggleButton3 = document.getElementById("toggleButton3");
      const info3 = document.getElementById("info3");
  
      // Ẩn phần "info" ban đầu
      info3.style.display = "none";
  
      // Thêm sự kiện click vào nút "View More/View Less"
      toggleButton3.addEventListener("click", () => {
        // Kiểm tra trạng thái hiển thị của phần "info"
        if (info3.style.display === "none") {
          // Hiện nội dung và đổi nút thành "View Less"
          info3.style.display = "block";
          toggleButton3.textContent = "View Less";
        } else {
          // Ẩn nội dung và đổi nút thành "View More"
          info3.style.display = "none";
          toggleButton3.textContent = "View More";
        }
      });

      // Lấy các phần tử HTML cần sử dụng
      const toggleButton4 = document.getElementById("toggleButton4");
      const info4 = document.getElementById("info4");
  
      // Ẩn phần "info" ban đầu
      info4.style.display = "none";
  
      // Thêm sự kiện click vào nút "View More/View Less"
      toggleButton4.addEventListener("click", () => {
        // Kiểm tra trạng thái hiển thị của phần "info"
        if (info4.style.display === "none") {
          // Hiện nội dung và đổi nút thành "View Less"
          info4.style.display = "block";
          toggleButton4.textContent = "View Less";
        } else {
          // Ẩn nội dung và đổi nút thành "View More"
          info4.style.display = "none";
          toggleButton3.textContent = "View More";
        }
      });

      // Lấy các phần tử HTML cần sử dụng
      const toggleButton5 = document.getElementById("toggleButton5");
      const info5 = document.getElementById("info5");
  
      // Ẩn phần "info" ban đầu
      info5.style.display = "none";
  
      // Thêm sự kiện click vào nút "View More/View Less"
      toggleButton5.addEventListener("click", () => {
        // Kiểm tra trạng thái hiển thị của phần "info"
        if (info5.style.display === "none") {
          // Hiện nội dung và đổi nút thành "View Less"
          info5.style.display = "block";
          toggleButton5.textContent = "View Less";
        } else {
          // Ẩn nội dung và đổi nút thành "View More"
          info5.style.display = "none";
          toggleButton5.textContent = "View More";
        }
      });