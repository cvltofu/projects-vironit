var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Stadard"] = 1] = "Stadard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Stadard;
var membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FB";
    SocialMedia["INSTAGRAM"] = "INSTA";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.INSTAGRAM;
console.log(social);
