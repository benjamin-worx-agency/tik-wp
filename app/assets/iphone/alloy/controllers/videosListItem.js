function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function setViewData(item) {
        this.item = item;
        $.videosListItem.nodeId = item.get("nid");
        Ti.API.info("videos cell loaded with argument: " + JSON.stringify(arguments));
        $.videoImage.applyProperties({
            autoload: true,
            image: item.get("thumb")
        });
        $.profileInfoNodeLabel.setText(item.get("titleUpperCase"));
        $.infoNodeTags.setText(item.get("kaltura_tags"));
    }
    require("alloy/controllers/tikkGallery").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "videosListItem";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.videosListItem = Ti.UI.createTableViewRow({
        height: 87,
        width: "100%",
        selectionStyle: "none",
        nodeType: "video",
        id: "videosListItem"
    });
    $.__views.videosListItem && $.addTopLevelView($.__views.videosListItem);
    $.__views.__alloyId343 = Ti.UI.createView({
        id: "__alloyId343"
    });
    $.__views.videosListItem.add($.__views.__alloyId343);
    $.__views.__alloyId344 = Ti.UI.createView({
        top: 5,
        bottom: 5,
        width: "310",
        id: "__alloyId344"
    });
    $.__views.__alloyId343.add($.__views.__alloyId344);
    $.__views.videoImage = Alloy.createWidget("com.baboonmedia.remoteimage", "widget", {
        width: "310",
        height: "82",
        id: "videoImage",
        __parentSymbol: $.__views.__alloyId344
    });
    $.__views.videoImage.setParent($.__views.__alloyId344);
    $.__views.__alloyId345 = Ti.UI.createView({
        left: 5,
        right: "50%",
        top: 5,
        bottom: 5,
        backgroundColor: Alloy.Globals.TikklrGreen,
        opacity: .7,
        zIndex: 50,
        id: "__alloyId345"
    });
    $.__views.__alloyId344.add($.__views.__alloyId345);
    $.__views.profileInfoNodeLabel = Ti.UI.createLabel({
        backgroundColor: "transparent",
        color: Alloy.Globals.TikklrWhite,
        font: {
            size: "15pt",
            fontFamily: "Substance-ExtraBold"
        },
        top: 5,
        left: 5,
        id: "profileInfoNodeLabel"
    });
    $.__views.__alloyId345.add($.__views.profileInfoNodeLabel);
    $.__views.infoNodeTags = Ti.UI.createLabel({
        left: "5",
        bottom: "5",
        font: {
            fontSize: "12pt",
            fontFamily: "Substance-Medium"
        },
        color: Alloy.Globals.TikklrBlack,
        id: "infoNodeTags"
    });
    $.__views.__alloyId345.add($.__views.infoNodeTags);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.baseController = "tikkGallery";
    setViewData(arguments[0].model);
    exports.clean = function() {
        $.destroy();
        $.off();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;