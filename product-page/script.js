$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});
const OneTimePrice =['$37', '$69', '$102', '$199'];
    const SubscriptionPrice =['$33.30', '$64.17', '$94.86', '$185.07'];

    