// Parse params from URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Add or update param
// https://stackoverflow.com/a/15023688
function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)", "i");
    if( value === undefined ) {
        if (uri.match(re)) {
            return uri.replace(re, '$1$2');
        } else {
            return uri;
        }
    } else {
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        } else {
            var hash =  '';
            if( uri.indexOf('#') !== -1 ){
                hash = uri.replace(/.*#/, '#');
                uri = uri.replace(/#.*/, '');
            }
            var separator = uri.indexOf('?') !== -1 ? "&" : "?";    
            return uri + separator + key + "=" + value + hash;
        }
    }  
}

function onThemeChange(val) {
    window.location.href = updateQueryStringParameter(window.location.href, 'theme', val);
}

function onBarmodeChange(val) {
    window.location.href = updateQueryStringParameter(window.location.href, 'barmode', val);
}

function Init() {
    var self = this;
    
    var container = document.getElementById("guify-container");

    // Create the GUI
    var gui = new guify({
        title: 'Guify App',
        theme: getParameterByName('theme') || 'dark', // dark, light, yorha, or theme object
        align: 'right', // left, right
        width: 350,
        barMode: getParameterByName('barmode') || 'above', // none, overlay, above, offset
        opacity: 0.95,
        root: container,
        open: true
    });

    // Populate the GUI

    this.someNumber = 0;
    gui.Register({
        type: 'range',
        label: 'Range',
        min: 0, max: 10,
        object: this, property: "someNumber",
        onChange: (data) => {
            console.log(self.someNumber);
        }
    });

    this.steppedNumber = 8;
    gui.Register({
        type: 'range',
        label: 'Stepped Range',
        min: 8, max: 64, step: 8,
        object: this, property: "steppedNumber",
        onChange: (data) => {
            console.log(self.steppedNumber);
        }
    });

    this.logNumber = 20;
    gui.Register({
        type: 'range',
        label: 'Log Range',
        object: this,
        property: 'logNumber',
        min: 0.1, max: 100, scale: 'log',
        onChange: (data) => {
            console.log(self.logNumber);
        }
    })

    this.intervalNumber = [15, 30];
    gui.Register({
        type: 'interval',
        label: 'Interval',
        min: 5, max: 75,
        object: this, property: "intervalNumber",
        onChange: (data) => {
            console.log(self.intervalNumber);
        }
    });

    this.steppedIntervalNumber = [10, 25];
    gui.Register({
        type: 'interval',
        label: 'Stepped Interval',
        min: 5, max: 75, step: 5,
        object: this, property: "steppedIntervalNumber",
        onChange: (data) => {
            console.log(self.steppedIntervalNumber);
        }
    });

    gui.Register({
        type: 'title',
        label: 'Title'
    });

    gui.Register({
        type: 'button',
        label: 'Button',
        action: () => {
            console.log('Clicked');
        }
    })

    this.checkboxTest = false;
    gui.Register({
        type: 'checkbox',
        label: 'Checkbox',
        object: this,
        property: 'checkboxTest',
        onChange: (data) => {
            console.log(self.checkboxTest);
        }
    })

    this.testSelection = 'Option 1';
    gui.Register({
        type: 'select',
        label: 'Select',
        object: this,
        property: 'testSelection',
        options: ['Option 1', 'Option 2'],
        onChange: (data) => {
            console.log(self.testSelection);
        }
    })

    this.testText = 'Some text here';
    gui.Register({
        type: 'text',
        label: 'Text',
        object: this,
        property: 'testText',
        onChange: (data) => {
            console.log(self.testText);
        }
    })

    this.rgbColor = 'rgb(255, 0, 0)';
    gui.Register({
        type: 'color',
        label: 'RGB Color',
        format: 'rgb',
        object: this,
        property: 'rgbColor'
    })

    this.hexColor = '#00FF00';
    gui.Register({
        type: 'color',
        label: 'Hex Color',
        format: 'hex',
        object: this,
        property: 'hexColor'
    })

    this.file = null;
    gui.Register({
        type: 'file',
        label: 'File',
        object: this,
        property: 'file',
        onChange: (data) => {
            console.log(data);
        }
    })

    this.displayValue = "Displays the toString representation of a variable.";
    gui.Register({
        type: 'display',
        label: 'Display',
        object: this,
        property: 'displayValue'
    })

    // Folder example
    gui.Register({
        type: 'folder',
        label: 'Folder',
        open: false
    });

    // Add to the folder example
    gui.Register([
        { type: 'range', label: 'Range', min: 0, max: 20, step: 1 },
        { type: 'title', label: 'Title' },
        { type: 'button', label: 'Button' },
        { type: 'checkbox', label: 'Checkbox' },
        { type: 'select', label: 'Select', options: ["Option A", "Option B"] },
        { type: 'text', label: 'Text', initial: 'Some text' },
        { type: 'color', label: 'Color' },
    ], {
            folder: 'Folder'
        });

    gui.Register({
        type: 'text',
        label: 'long long long long long long long long label',
        folder: 'Folder',
    })

    // Add a nested folder
    gui.Register({ type: 'folder', label: 'Nested Folder', folder: 'Folder', open: false });
    gui.Register({ type: 'text', label: 'Folder Text', folder: 'Nested Folder', initial: 'Nested text' });

    // Debug folder
    gui.Register({
        type: 'folder',
        label: 'Debug',
        open: false
    })

    gui.Register({
        type: 'button',
        label: 'Toast Test',
        folder: 'Debug',
        action: () => {
            // Send a toast
            gui.Toast('Test Toast');
        },
    })

    gui.Register({
        type: 'button',
        label: 'Randomize Components',
        folder: 'Debug',
        action: () => {
            // Randomize all the values bound to components in this example.
            // Good test for whether component binding is actually working.
            self.someNumber = Math.random() * 10;
            self.steppedNumber = ~~((Math.random() + 0.1) * 8) * 8;
            self.logNumber = Math.random() * 99 + 0.1;
            self.checkboxTest = !checkboxTest;

            testText = (Math.random() + 1).toString(36).substring(7); // Random string
            rgbColor = 'rgb(' + Math.random() * 255 + ', 0, 0)';
            hexColor = "#";
            for (var i = 0; i < 6; i++) hexColor += Math.floor(Math.random() * 9).toString()

            testSelection = "Option " + (Math.random() < 0.5 ? "1" : "2");
        }
    })

    // This button gets automatically removed by our API
    var removedButton = gui.Register({
        type: 'button',
        label: 'Button',
        action: () => {
            console.log('Clicked');
        }
    })
    removedButton.container.disabled = true;
    gui.Remove(removedButton);
}


if (document.readyState === 'complete') {
    Init();
} else {
    window.onload = function() {
        Init();
    }
}