function a() {
    console.log(this);
    this.newvariable = 'hello';
}

var b = function() {
    console.log(this);   
}

a();

console.log(newvariable); // not good!

b();

var c = {
    name: 'The c object',
    log: function() {
        var self = this;
        
        self.name = 'Updated c object';
        console.log(self);
        
        var setname = function(newname) {
            self.name = newname;   
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();

var d = {
    name: 'The d object',
    log: function() {
        this.name = this.name + 'Updated d object';
        console.log(this);
    }
}

var e = {
    name: 'The e object',
    log: function() {

        this.name = this.name + 'Updated e object';
        console.log(this);

        var setname = function(newname) {
            this.name = newname;   
        }
        setname('Updated with setname! By the e object');
        console.log(this);

    }
}

var f = {
    name: 'The f object',
    log: function() {

        this.name = this.name + 'Updated f object';
        console.log(this);

        // What happens to this if I am defining an arrow function?
        var setname = (newname) => {
            this.name = newname;   
        }
        setname('Updated with setname! By the f object');
        console.log(this);

    }
}







