$('.btn').click(function () {
  $('.wrapper-popup').fadeIn().css({ "display": "flex" });
})

$('.close').click(function () {
  $('.wrapper-popup').fadeOut()
})

$(document).mouseup(function (e) {
  let pq = $('.popup');

  if (!pq.is(e.target) && pq.has(e.target).length === 0) {
    // console.log(pq.has('div').length ===0)
    $('.wrapper-popup').fadeOut()
  }
})


