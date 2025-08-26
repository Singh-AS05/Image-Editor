    function brightness() {
      let bright=document.getElementById("bright").value;
      let setBright=document.getElementById("img");
      setBright.style.filter="brightness(" + bright + "%)";
    }
    function contrast() {
      let con=document.getElementById("con").value;
      let setCon=document.getElementById("img");
      setCon.style.filter="contrast(" + con + "%)";
    }
    function saturation() {
      let satu=document.getElementById("satu").value;
      let setSatu=document.getElementById("img");
      setSatu.style.filter="saturate(" + satu + "%)";
    }
