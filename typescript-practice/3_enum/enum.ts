enum Membership {
    Simple,
    Stadard,
    Premium,
}

const membership = Membership.Stadard;
const membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FB',
    INSTAGRAM = 'INSTA',
}

const social = SocialMedia.INSTAGRAM;
console.log(social);
