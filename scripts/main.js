(function () {
  'use strict';

  // ----- 스크롤 애니메이션 (Intersection Observer) -----
  var animateTargets = document.querySelectorAll('.animate-on-scroll');
  if (animateTargets.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1
      }
    );
    animateTargets.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ----- 폼 검증 -----
  var form = document.getElementById('coffee-form');
  if (form) {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');

    function showError(el, message) {
      if (!el) return;
      el.textContent = message;
      el.previousElementSibling && el.previousElementSibling.classList.add('is-invalid');
    }

    function clearError(el) {
      if (!el) return;
      el.textContent = '';
      var input = el.previousElementSibling;
      if (input) input.classList.remove('is-invalid');
    }

    function validateName() {
      var value = nameInput.value.trim();
      if (value.length === 0) {
        showError(nameError, '이름을 입력해 주세요.');
        return false;
      }
      if (value.length < 2) {
        showError(nameError, '이름은 2자 이상 입력해 주세요.');
        return false;
      }
      clearError(nameError);
      return true;
    }

    function validateEmail() {
      var value = emailInput.value.trim();
      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value.length === 0) {
        showError(emailError, '이메일을 입력해 주세요.');
        return false;
      }
      if (!emailRe.test(value)) {
        showError(emailError, '올바른 이메일 형식을 입력해 주세요.');
        return false;
      }
      clearError(emailError);
      return true;
    }

    if (nameInput) {
      nameInput.addEventListener('blur', validateName);
      nameInput.addEventListener('input', function () {
        clearError(nameError);
      });
    }
    if (emailInput) {
      emailInput.addEventListener('blur', validateEmail);
      emailInput.addEventListener('input', function () {
        clearError(emailError);
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nameOk = validateName();
      var emailOk = validateEmail();
      if (nameOk && emailOk) {
        // 추후 구글 폼 제출 또는 API 연동 시 여기서 처리
        alert('신청이 완료되었습니다. (데모: 실제 전송은 구글 폼 연동 후 동작합니다.)');
        form.reset();
        clearError(nameError);
        clearError(emailError);
        nameInput && nameInput.classList.remove('is-invalid');
        emailInput && emailInput.classList.remove('is-invalid');
      }
    });
  }

  // ----- 내부 앵커 스무스 스크롤 -----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    var targetId = anchor.getAttribute('href');
    if (targetId === '#') return;
    var target = document.querySelector(targetId);
    if (target) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });
})();
