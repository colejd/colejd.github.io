
var message = "It's Thursday"
var simulateThursday = false;
var running = false;
var isThursday = (new Date().getDay() == 4);

function beginFestivities() {
    // Load widget assets
    var thursday = new this.IsItThursday(message);
    thursday.Init();

    console.log("Today is Thursday!");

    document.getElementById('thursday-button').removeAttribute("style");
    document.getElementById('thursday-button').innerHTML = "🎵 It's Thursday 🎵";
    document.getElementById('thursday-button').addEventListener('click', function() {
        if (running === false) {
            console.log("Thursday has begun in earnest");
            running = true;
            thursday.Start();
            document.getElementById('thursday-button').innerHTML = 'Stop Thursday';
        } else {
            console.log("Thursday is OVER");
            running = false;
            thursday.Stop();
            document.getElementById('thursday-button').innerHTML = "🎵 It's Thursday 🎵";
        }
    });
}

if (window.location.hash && window.location.hash.toLowerCase() == "#thursday") {
    message += " (Simulated)";
    isThursday = true;
}

if(isThursday) {
    function addScript(attribute, callback) {
        var s = document.createElement('script');
        for (var attr in attribute) {
            s.setAttribute(attr, attribute[attr] ? attribute[attr] : null)
        }
        s.onload = callback;
        document.body.appendChild(s);
    }

    addScript({
        src: '/assets/js/IsItThursday/IsItThursday.min.js',
        type: 'text/javascript',
        async: true
    }, function() {
        beginFestivities();
    });
}