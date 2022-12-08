$(() => {
  $('a[href*="#"]:not([href="#"])').click((e) => {
    const target = $(e.target.hash);

    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );

      return false;
    }
  });
});
