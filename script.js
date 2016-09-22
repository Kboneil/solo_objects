
function ChildhoodMemories (name, creator, first, last, main, alter, top, second, third, best, worst, love, pet, location) {
        this.showName = name;
        this.creatorName = creator;
        this.firstAired = first;
        this.lastAired = last;
        this.mainChar = main;
        this.alterEgo = alter;
        this.topInterest = top;
        this.secondInterest = second;
        this.thirdInterest = third;
        this.bestFriend = best;
        this.worstFriend = worst;
        this.loveInterest = love;
        this.pet = pet;
        this.location = location;
    }


var doug = new ChildhoodMemories ('Doug', 'Jim Jinkins', 'August 11, 1991',  'June 26, 1999', 'Doug Funnie', 'Quailman', 'The Beets', 'journaling', 'playing the banjo', 'Skeeter Valentine', 'Roger Klotz', 'Patti Mayonnaise', 'Porkchop', 'Bluffington');


ChildhoodMemories.prototype.showSummary = function () {
      return this.showName + ' was created by ' + this.creatorName + ' and aired from ' + this.firstAired + ' to ' + this.lastAired + '. It was set in ' + this.location + ', and follows the life of '+
      this.mainChar + ', also know as ' + this.alterEgo + '. ' + this.mainChar + ' particularly liked ' + this.topInterest  + ', ' + this.secondInterest+ ' and ' + this.thirdInterest +
      '. The supporting cast was ' + this.bestFriend + ', the best friend, ' + this.worstFriend + ', the enemy, ' + this.loveInterest + ', the love interest, and ' +
      this.pet + ', ' + this.mainChar + '\'s\ pet.';
};

console.log(doug.showSummary());
