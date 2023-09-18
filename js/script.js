
AOS.init({
  duration: 1000
});

function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}


window.onscroll = function () {
  progressBarScroll();
};



$(document).ready(preloderFunction());
    
function preloderFunction() {
  
    setTimeout(function() {
        document.getElementById("page-top").scrollIntoView();
        
        $('#ctn-preloader').addClass('loaded');  
        $('body').removeClass('no-scroll-y');

        if ($('#ctn-preloader').hasClass('loaded')) {
          $(this).delay(2000).fadeOut();
        }
    }, 1000);
}



function afterLoad() {
}





$(function ($) {
  $(".mobile_btn").on("click", function () {
    $(".main_menu").slideToggle();
    $(".mobile_btn i").toggleClass("fa-xmark fa-xl");
  });

  if ($(window).width() < 768) {
    $(".main_menu  ul li a").on("click", function () {
      $(this)
        .parent(".has_dropdown")
        .children(".sub_menu")
        .css({ "padding-left": "15px" })
        .stop()
        .slideToggle();

      $(this)
        .parent(".has_dropdown")
        .children("a")
        .find(".fa-angle-right")
        .stop()
        .toggleClass("fa-rotate-90");
    });
  }
});







// var currentText = ""; // تخزين النص الحالي

// function updateImageWithText(event) {
//     var textInput = event.target.value;
    
//     if (event.inputType === 'insertText' && event.data === ' ') {
//         // تم إضافة مسافة، لذلك نقوم بإضافة النص الحالي إلى الصورة
//         currentText += ' ';
//     } else if (event.inputType === 'deleteContentBackward') {
//         // تم مسح محتوى إلى الوراء، لذلك نقوم بحذف الحرف الأخير من النص الحالي
//         currentText = currentText.slice(0, -1);
//     } else if (event.inputType === 'insertText' && event.data.match(/[a-zA-Z0-9]/)) {
//         // تم إضافة حرف أو رقم، لذلك نقوم بإضافته إلى النص الحالي
//         currentText += event.data;
//     }
    
//     // احصل على الصورة
//     var image = document.getElementById("image");
  
//     // إنشاء عنصر canvas للرسم على الصورة
//     var canvas = document.createElement("canvas");
//     canvas.width = image.width;
//     canvas.height = image.height;
//     var context = canvas.getContext("2d");
  
//     // قم برسم الصورة على العنصر canvas
//     context.drawImage(image, 0, 0);
  
//     // ضع النص على العنصر canvas
//     context.font = "30px Arial";
//     context.fillStyle = "white"; // لون النص
//     context.fillText(currentText, 50, 50); // تعديل الموقع ونص النص
  
//     // عرض العنصر canvas على الصورة
//     image.src = canvas.toDataURL();
// }



// function downloadImageWithText() {
//   // احصل على النص الذي تم إدخاله في الحقل النصي
//   var textInput = document.getElementById("textInput").value;

//   // احصل على الصورة
//   var image = document.getElementById("image");

//   // إنشاء عنصر canvas للرسم على الصورة
//   var canvas = document.createElement("canvas");
//   canvas.width = image.width;
//   canvas.height = image.height;
//   var context = canvas.getContext("2d");

//   // قم برسم الصورة على العنصر canvas
//   context.drawImage(image, 0, 0);

//   // ضع النص على العنصر canvas
//   context.font = "30px Arial";
//   context.fillStyle = "white"; // لون النص
//   context.fillText(textInput, 50, 50); // تعديل الموقع ونص النص

//   // قم بتحميل الصورة بالكامل مع النص
//   var downloadLink = document.createElement("a");
//   downloadLink.href = canvas.toDataURL(); // تحويل العنصر canvas إلى URL
//   downloadLink.download = "image_with_text.png"; // اسم الملف الذي سيتم تنزيله
//   downloadLink.click();
// }                                      












function updateHeaderText(inputNumber) {
  var header = document.getElementById(`headerText${inputNumber}`);
  var textInput = document.getElementById(`textInput${inputNumber}`);
  header.textContent = textInput.value;
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  var words = text.split(' ');
  var line = '';

  for (var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = ctx.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line, x, y);
          line = words[n] + ' ';
          y += lineHeight;
      }
      else {
          line = testLine;
      }
  }
  ctx.fillText(line, x, y);
}

function downloadImageWithText() {
  const imageContainer = document.getElementById("image-container");

  // إنشاء كانفاس للصورة والنص
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // تعيين أبعاد الكانفاس لتناسب الصورة
  canvas.width = imageContainer.offsetWidth;
  canvas.height = imageContainer.offsetHeight;

  // رسم الصورة على الكانفاس
  const image = document.getElementById("image");
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  // تحديث النص في العناصر <p> و <h3>
  const headerText1 = document.getElementById("headerText1");
  const headerText2 = document.getElementById("headerText2");
  headerText1.textContent = document.getElementById("textInput1").value;
  headerText2.textContent = document.getElementById("textInput2").value;

  // رسم النص على الكانفاس (لكل input)
  const textPositions = [
      { top: 55, right: 70 },
      { top: 15, right: 90 },
  ];

  for (let i = 0; i < 2; i++) {
      const headerText = document.getElementById(`headerText${i + 1}`);
      ctx.fillStyle = "#fff";
      ctx.font = "20px cairo";
      ctx.shadowColor = "#0f5a75"; // لون الظل
      ctx.shadowBlur = 3; // قوة الظل (قيمة عددية)
      ctx.shadowOffsetX = 2; // إزاحة الظل في الاتجاه السين (الأفقي)
      ctx.shadowOffsetY = 2; // إزاحة الظل في الاتجاه الواو (العمودي)
      ctx.font = i === 1 ? "bold 34px cairo" : "20px cairo";
      ctx.direction = "rtl";

      if (i === 1) {
          ctx.fillStyle = "#02344a"; // تغيير اللون للفهرس 1 (index 1)
      }

      const x = canvas.width * (textPositions[i].right / 100);
      const y = canvas.height * (textPositions[i].top / 100);

      // تحديد العرض الأقصى والارتفاع بناءً على حجم الكانفاس وموقع النص
      const maxWidth = canvas.width * 0.9; 
      const lineHeight = 50; 

      wrapText(ctx, headerText.textContent, x, y, maxWidth, lineHeight);
  }
  // تحويل الكانفاس إلى ملف صورة
  const dataURL = canvas.toDataURL("image/png");

  // إنشاء عنصر رابط لتنزيل الصورة
  const a = document.createElement("a");
  a.href = dataURL;
  a.download = "image.png"; // اسم الملف
  a.click();
}


























const backgroundMusic = document.getElementById('backgroundMusic');

  const textInput1 = document.getElementById('textInput1');
  const textInput2 = document.getElementById('textInput2');

  // إضافة مستمعين لحقول الإدخال لتشغيل الموسيقى عند التركيز
  textInput1.addEventListener('focus', () => {
    backgroundMusic.play();
  });

  textInput2.addEventListener('focus', () => {
    backgroundMusic.play();
  });

  // إضافة مستمعين لحقول الإدخال لإيقاف الموسيقى عند فقدان التركيز
  textInput1.addEventListener('blur', () => {
    backgroundMusic.pause();
  });

  textInput2.addEventListener('blur', () => {
    backgroundMusic.pause();
  });



