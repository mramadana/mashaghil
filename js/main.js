$(window).on("load", function () {
  $(".loader")
    .delay(200)
    .fadeOut(2000, function () {
      $("body").css("overflow", "auto");
    });
});



$(document).ready(function () {
  "use strict";

  let isRtl = $('html[lang="ar"]').length > 0;

  // select-2 without search
  $(".select-plugin").select2({
    dir: isRtl ? "rtl" : "ltr",
    minimumResultsForSearch: Infinity,
  });

  $(".select").select2({
    dir: isRtl ? "rtl" : "ltr",
  });

  $(':input[type="number"]').on("input", function () {
    var nonNumReg = /[^0-9]/g;
    $(this).val($(this).val().replace(nonNumReg, ""));
  });

  $(".sidebar-anchors li a").each(function () {
    if (window.location.href.includes($(this).attr("href"))) {
      $(this).parent("li").addClass("active");
    }
  });

  // click on navbar-btn to hide sidebar
  $(".navbar-btn").on("click", function () {
    $(".sidebar-menu").toggleClass("move");
    $(".content").toggleClass("move");
    $(".top-nav").toggleClass("move");
  });

  $(".close-ic").on("click", function () {
    $(".sidebar-menu").removeClass("move");
  });

  // click to open form
  $(".responsive-icon-search").click(function () {
    $(".nav-search").addClass("active");
  });

  // click to close form
  $(".nav-search .responsive-filter-x").click(function () {
    $(".nav-search").removeClass("active");
  });

  $(document).on("click", ".stati-card", function () {
    $(".stati-card").removeClass("active");
    $(this).addClass("active");
  });

  // test



// Get the dropdown element
var dropdownMenu = $(".dr-lang .dropdown-menu");

// Set the initial value of the dropdown from local storage
if (localStorage.getItem("selectedOption")) {
  dropdownMenu.find("a[data-value='" + localStorage.getItem("selectedOption") + "']").addClass("active");
}

// Add an event listener to the dropdown menu
dropdownMenu.on("click", "a", function() {
  // Get the selected value and text
  var selectedValue = $(this).data("value");
  var selectedText = $(this).text();

  $(".dr-lang #dropdownMenuButton .text").css("display", "none");

  // Update the dropdown text
  $("#selectedOptionText").text(selectedText);

  // Update the local storage value
  localStorage.setItem("selectedOption", selectedValue);

  // Remove the active class from all links
  dropdownMenu.find("a").removeClass("active");

  // Add the active class to the selected link
  $(this).addClass("active");
});

// Set the initial text of the dropdown
var initialSelectedValue = localStorage.getItem("selectedOption");
if (initialSelectedValue) {
  var initialSelectedText = dropdownMenu.find("a[data-value='" + initialSelectedValue + "']").text();
  $("#selectedOptionText").text(initialSelectedText);
}

if ($(".dr-lang .dropdown-item").hasClass("active")) {
  $(".dr-lang #dropdownMenuButton .text").css("display", "none");
}

  const setRtlDir = function () {
    $("html").attr({
      dir: "rtl",
      lang: "ar",
    });

    $("#style").attr("href", "css/bootstrap-rtl.min.css");
    $("#js_link").attr("src", "js/bootstrap-rtl.min.js");
    console.log("arabic");
    localStorage.removeItem("spruhaltr");
    localStorage.setItem("spruhartl", true);
  };

  const setLtrDir = function () {
    $("html").attr({
      dir: "ltr",
      lang: "en",
    });
    $("#style").attr("href", "css/bootstrap.min.css");
    $("#js_link").attr("src", "js/bootstrap.min.js");
    console.log("english");

    localStorage.removeItem("spruhartl");
    localStorage.setItem("spruhaltr", true);
  };

  $(document).on("click", ".ar-lang", function (e) {
    e.preventDefault();
    setRtlDir();

    location.reload();
  });

  $(document).on("click", ".en-lang", function (e) {
    e.preventDefault();
    setLtrDir();
    location.reload();
  });

  // if(localStorage.getItem("spruhartl"))

  if (localStorage.getItem("spruhaltr")) {
    setLtrDir();
  }
  if (localStorage.getItem("spruhartl")) {
    setRtlDir();
  }
});
