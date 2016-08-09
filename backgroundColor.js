function setAppBarColors(brandColorHex, brandColorInactiveHex) {
    // Detect if the Windows namespace exists in the global object
    if (typeof Windows !== 'undefined') {
        var brandColor = hexStrToRGBA(brandColorHex);
        var brandColorInactive = hexStrToRGBA(brandColorInactiveHex);
        // Get a reference to the App Title Bar
 var appTitleBar = Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar;

        var black = hexStrToRGBA('#000');
        var white = hexStrToRGBA('#FFF');

        appTitleBar.foregroundColor = white;
        appTitleBar.backgroundColor = brandColor;

        appTitleBar.buttonForegroundColor = white;
        appTitleBar.buttonBackgroundColor = brandColor;

        appTitleBar.buttonHoverForegroundColor = white;
        appTitleBar.buttonHoverBackgroundColor = brandColor;

        appTitleBar.buttonPressedForegroundColor = brandColor;
        appTitleBar.buttonPressedBackgroundColor = white;

        appTitleBar.inactiveBackgroundColor = brandColorInactive;
        appTitleBar.inactiveForegroundColor = brandColor;

        appTitleBar.buttonInactiveForegroundColor = brandColor;
        appTitleBar.buttonInactiveBackgroundColor = brandColorInactive;

        appTitleBar.buttonInactiveHoverForegroundColor = brandColor;
        appTitleBar.buttonInactiveHoverBackgroundColor = brandColorInactive;

        appTitleBar.buttonPressedForegroundColor = brandColor;
        appTitleBar.buttonPressedBackgroundColor = brandColorInactive;
    }
}