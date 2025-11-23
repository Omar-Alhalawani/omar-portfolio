<form action="https://formsubmit.co/omar.alhalawani2006@gmail.com" method="POST" class="contact-form">

  <!-- Disable CAPTCHA -->
  <input type="hidden" name="_captcha" value="false">

  <!-- Remove redirect -->
  <!-- <input type="hidden" name="_next" value="https://YOUR_GITHUB_USERNAME.github.io/success.html"> -->

  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" name="name" required="">
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label>Email Address</label>
        <input type="email" name="email" required="">
      </div>
    </div>
  </div>

  <div class="form-group">
    <label>Subject</label>
    <input type="text" name="subject" required="">
  </div>

  <div class="form-group">
    <label for="projectMessage">Message</label>
    <textarea name="message" id="projectMessage" rows="5" required=""></textarea>
  </div>

  <button type="submit" class="submit-btn">
    <span>Send Message</span>
    <i class="bi bi-arrow-right"></i>
  </button>

</form>
