var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var bi = Paper.image('img/bi.jpg', 0, 0, 260, 40).toDefs();
var character02 = Paper.image('img/character02.png', 0, 0, 210, 190).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단
var topArea = Paper.g();

bi.use().transform('t50, 40').appendTo(topArea);

topArea.text(180, 135, '운모 익히기').attr({
  'font-size': 33,
  'text-anchor': 'middle'
});

character02.use().transform('t70, 210').appendTo(topArea);

var r1 = topArea.rect(50, 480, 260, 50, 5).attr({
  'fill': '#C7EAE7'
});
var t1 = topArea.text(180, 515, '시 작').attr({
  'font-size': 25,
  'text-anchor': 'middle',
  'font-weight': 'bold'
});

var rt1 = topArea.g(r1, t1).click(handler01).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('02_menu.html');
}
