// Generated by CoffeeScript 1.6.2
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define('views/pages/how', ['views/pages/PageView'], function(PageView) {
    var How, _ref;

    How = (function(_super) {
      __extends(How, _super);

      function How() {
        _ref = How.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      How.prototype.template = '#how-page-template';

      How.prototype.className = 'how-p';

      return How;

    })(PageView);
    return How;
  });

}).call(this);
