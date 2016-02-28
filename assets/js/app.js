"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DreamCycle = (function () {
    function DreamCycle() {
        _classCallCheck(this, DreamCycle);
    }

    _createClass(DreamCycle, [{
        key: 'init',
        value: function init() {
            if (typeof dreams === 'undefined') {
                this.init();
            } else {
                this.showRandomDream();
            }
        }
    }, {
        key: 'showRandomDream',
        value: function showRandomDream() {
            var dream = dreams[Math.floor(Math.random() * dreams.length)];
            this.showDream(dream);
        }
    }, {
        key: 'showDream',
        value: function showDream(dream) {

            $('#date').html(dream.date);
            $('#dream span').html(dream.dream);

            if ($('#dream span').text() == '{{dream}}') {
                window.location.reload();
            } else {
                $('#dream').fadeIn(3000, function () {
                    $('#date').fadeIn(1500);
                });
            }
        }
    }]);

    return DreamCycle;
})();

var cycle = new DreamCycle();

cycle.init();

$('#random').on('click', function() {
    window.location.reload();
});