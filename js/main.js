// 스크롤 이벤트
const scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
const elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {
  Array.prototype.forEach.call(elementsToShow, function(element){
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      // element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 400
      && rect.bottom >= 400)
    ||
    (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top >= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 400 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}


// // CSS root스타일 변경
// let theme = document.querySelector(':root'); // 가상 클래스 요소 얻기
// let styles = getComputedStyle(theme); // window.getComputedStyle 메서드를 이용하면, 해당 요소에 전역적으로 적용된 모든 형태의 style을 반환
 
// styles.getPropertyValue('--main-color'); // 변수 값 얻기
// theme.style.setProperty('--main-color', '변수값 입력'); // 변수 값 변경


// var effBg = document.querySelector('.eff_bg');
// effBg.playbackRate = 0.7;


function fontBasic() {
  document.querySelector("html").style.fontSize = "62.5%";
}

function fontBig() {
  document.querySelector("html").style.fontSize = "70%";
}

function fontBbig() {
  document.querySelector("html").style.fontSize = "75%";
}


$(function() {
  $('.eff_bg').play();
  
  // bgm
  var bgm = document.getElementById("videoplay");
  $(".bgm_btn").click(function(){
    if($(this).find("i.xi").hasClass("xi-volume-off")) {
      $(this).find("i.xi").removeClass("xi-volume-off");
      $(this).find("i.xi").addClass("xi-volume-mute");
      bgm.play();
    }else{
      $(this).find("i.xi").addClass("xi-volume-off");
      $(this).find("i.xi").removeClass("xi-volume-mute");
      bgm.pause();
    }
  });


  // 아코디언
  $(".acc_items").on("click", ".acc_heading", function () {
		$(this).toggleClass("active").next().slideToggle();

		$(".acc_content").not($(this).next()).slideUp(300);

		$(this).siblings().removeClass("active");
	});


  // 계좌복사
  $('.copy_btn').click(function() {
    let copy_num = $(this).attr('data-copy');

    var valOfDIV = $('#' + copy_num).text();
    // textarea 생성
    const textArea = document.createElement('textarea');

    // textarea 추가
    document.body.appendChild(textArea);
        
    // textara의 value값으로 div내부 텍스트값 설정
    textArea.value = valOfDIV;

    // textarea 선택 및 복사
    textArea.select();
    document.execCommand('copy');

    // textarea 제거
    document.body.removeChild(textArea);
    alert('계좌번호가 복사되었습니다. \n' + valOfDIV)
  });


  // 방명록
  $('.writing_btn').click(function() {
    $('.writing_popup').addClass('show');
  })
  
  // 방명록 작성 input 확인
  $('.submit_btn').click(function() {
    if($('#guest_naem').val() == '') {
      alert('이름을 입력해주세요');
      return false;
    } else if($('#guest_pw').val() == '') {
      alert('비밀번호를 입력해주세요');
      return false;
    } else if($('#guest_con').val() == '') {
      alert('내용을 입력해주세요');
      return false;
    } else {
      $('.writing_popup').removeClass('show');
    }
  });
  
  // 방명록 작성 닫기
  $('.close_btn').click(function() {
    $('.writing_popup').removeClass('show');
  });
  
  // 삭제 버튼 클릭시
  $('.del_btn').click(function() {
    $(".popup_bg").addClass('show');
    $('.popup_bg').css('background','rgba(0, 0, 0, 0.7)');
    $('.delete_popup').addClass('show');
  });

  // 방명록 삭제버튼 클릭시
  $('.delete_btn').click(function() {
    if($('.pw').val() == '') {
      alert('비밀번호를 입력해주세요.');
      return false;
    } else {
      $(".popup_bg").removeClass('show');
      $('.delete_popup').removeClass('show');
    }
  });
});