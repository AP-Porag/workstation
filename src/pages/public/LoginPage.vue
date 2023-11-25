<template>
  <div class="mb-login-container">
    <div class="card">

      <div class="text-center intro">
        <img src="https://i.imgur.com/uNiv4bD.png" width="160">
        <span class="d-block account">Don't have account yet?</span>
        <span class="contact">Contact us at <a href="" class="mail">contact@bbbootstrap.com</a> and <br> we will take care of everything</span>
      </div>

      <div class="mt-4 text-center">

        <h4 >Log In.</h4>
        <span>Login with your admin credentials</span>

        <div class="mt-3 inputbox">

          <input type="text" class="form-control" name="" placeholder="Email">


          <i class="fa fa-user"></i>

        </div>


        <div class="inputbox">

          <input type="text" class="form-control" name="" placeholder="Password">
          <i class="fa fa-lock"></i>

        </div>

      </div>


      <div class="d-flex justify-content-between">

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Keep me Logged in
          </label>
        </div>

        <div>
          <a href="#" class="forgot">Forgot Password?</a>
        </div>

      </div>

      <div class="mt-2">


        <button class="btn btn-primary btn-block">Log In</button>


      </div>






    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView"
}
</script>

<style scoped>

.mb-login-container{
  background-image: url("https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;
  background-color: rgb(55 65 81/0.6);
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: relative;
  z-index: 1;
}

.card{
  width: 400px;
  padding: 20px;
  border:none;
}



.account{
  font-weight: 500;
  font-size: 17px;
}

.contact{
  font-size: 13px;
}

.form-control{
  text-indent: 14px;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #4a148c;
  outline: 0;
  box-shadow: none;
}

.inputbox{
  margin-bottom: 10px;
  position: relative;
}

.inputbox i{
  position: absolute;
  left: 8px;
  top: 12px;
  color: #dadada;
}


.form-check-label{
  font-size: 13px;
}

.form-check-input {
  width: 14px;
  height: 15px;
  margin-top: 5px;

}

.forgot {
  font-size: 14px;
  text-decoration: none;
  color: #4A148C;
}

.mail{
  color: #4a148c;
  text-decoration: none;
}


.form-check{
  cursor: pointer;
}

.btn-primary {
  color: #fff;
  background-color: #4A148C;
  border-color: #4A148C;
  width: 100%;
}
</style>