// ======================= DOM Utility Functions from PastryKit =============================== //
// Branched from: https://desandro.github.io/3dtransforms/docs/card-flip.html //

// Sure, we could use jQuery or XUI for these,
// but these are concise and will work with plain vanilla JS

Element.prototype.hasClassName = function (a) {
    return new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)").test(this.className);
};
Element.prototype.addClassName = function (a) {
    if (!this.hasClassName(a)) {
        this.className = [this.className, a].join(" ");
    }
};
Element.prototype.removeClassName = function (b) {
    if (this.hasClassName(b)) {
        var a = this.className;
        this.className = a.replace(new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)", "g"), " ");
    }
};
Element.prototype.toggleClassName = function (a) {
  this[this.hasClassName(a) ? "removeClassName" : "addClassName"](a);
};


// ======================= Card Flip =============================== //
// Source: https://desandro.github.io/3dtransforms/docs/card-flip.html //

var card2 = document.getElementById("homepage-flipcard-2");

// Assign click action to flip card question
document.getElementById("homepage-flipcard-flip-2").onclick = function() {
  card2.toggleClassName("flipped");
}

// Assign click reverse the flip card action
document.getElementById("homepage-flipcard-unflip-2").onclick = function() {
  $(" #homepage-flipcard-2").removeClass("flipped")
}
