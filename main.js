$(() => {
  // get dom elem
  let $width     = $('#width'),
      $height    = $('#height'),
      $btnCal    = $('#calc')
      $perimeter = $('#perimeter'),
      $area      = $('#area');

  // calc button click
  $btnCal.click(()=> {

    // get value
    let w = Number($width.val()),
        h = Number($height.val());

    // calc
    let p = (w + h) * 2;
    let a = w * h;

    // 解决浮点舍入误差的问题
    function roundFractional(x, n) {
      return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
    let n1,n2;
    try{
      n1 = w.toString().split('.')[1].length
    }catch(e){
      n1 = 0
    }
    try{
      n2 = h.toString().split('.')[1].length
    }catch(e){
      n2 = 0
    }
    
    // output
    $perimeter.val(roundFractional(p,Math.max(n1,n2)));
    $area.val(roundFractional(a,n1+n2));
    
  })
})
