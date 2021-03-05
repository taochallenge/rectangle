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
        
    // output
    $perimeter.val(roundFractional(p,2));
    $area.val(roundFractional(a,2));
    
  })
})
