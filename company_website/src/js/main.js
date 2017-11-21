$(function() {
    // Auto play modal video
    $(".video").click(function () {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
    });

    /* Assign empty url value to the iframe src attribute when modal hide or closes, which stop the video playing */
    $("#videoModal").on('hide.bs.modal', function(){
        $("iframe").attr('src', "");
    });

    /* For several modals, just use their id's
      $('#videoModal, #videoModalRome, #videoModalMRow, #videoModalEO11, #videoModalAD, #videoModalCC, #videoModalSG').on('hide.bs.modal', function(){
         $("iframe").attr('src', "");
      });
    */
});


$(document).on('click', '[data-toggle="lightbox"]', function(event){
  event.preventDefault();
  $(this).ekkoLightbox();
});

$('.slider').slick({
  infinite: true,
  slideToShow:1,
  slideToScroll:1
});
