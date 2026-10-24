var consultForm = document.getElementById('consultForm');
var notice = document.getElementById('notice');
var noticeClose = document.getElementById('noticeClose');
var nameInput = document.getElementById('fName');
var contactInput = document.getElementById('fContact');
var messageInput = document.getElementById('fMessage');

consultForm.addEventListener('input', function(event){
  event.target.setCustomValidity('Tên không thể nhỏ hơn 2 kí tự');
});

consultForm.addEventListener('submit', function(event){
  event.preventDefault();

  if (nameInput.value.trim().length < 2) {
    nameInput.setCustomValidity('Vui lòng nhập họ và tên của bạn.');
    nameInput.reportValidity();
    return;
  }

  var contact = contactInput.value.trim();
  var phone = contact.replace(/[\s().-]/g, '');
  var isPhone = /^\+?[0-9]{8,15}$/.test(phone);
  var isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);

  if (!isPhone && !isEmail) {
    contactInput.setCustomValidity('Vui lòng nhập số điện thoại hoặc email hợp lệ.');
    contactInput.reportValidity();
    return;
  }

  if (messageInput.value.trim() === '') {
    messageInput.setCustomValidity('Vui lòng nhập nhu cầu tư vấn của bạn.');
    messageInput.reportValidity();
    return;
  }

  notice.showModal();
});

noticeClose.addEventListener('click', function(){
  notice.close();
});
