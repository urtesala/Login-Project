const feedback = {
  dest: document.getElementById("feedback"),
  success: function (msg) {
    this.dest.className = "alert alert--success";
    this.dest.textContent = msg;
  },
  fail: function (msg) {
    this.dest.className = "alert alert--fail";
    this.dest.textContent = msg;
  },
};

export default feedback;
