// người dùng đăng ký
function addUser(){
    event.preventDefault();
    // tạo ra 1 đối tượng
    var user = new User();
    // gọi tới tất cả các thuộc tính trong đối tượng và gán giá trị
    user.email = document.getElementById('email').value;
    user.password = document.getElementById('password').value;
    user.confirmPassword = document.getElementById('confirmPassword').value;
    user.name = document.getElementById('name').value;
    user.phone = document.getElementById('phone').value;
    user.gender = document.getElementById('male').value;
    user.gender = document.getElementById('female').value;
  // gọi api addUser để thêm người dùng vào
  if(user.password == user.confirmPassword){
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: user,
        responseType: "json"
    });
    promise.then(function(res){
        console.log(res)
    });
    promise.catch(function(err){
        console.log(err)
    });
  }else{
    alert('vui lòng xác nhận mật khẩu trùng khớp')
  }
}