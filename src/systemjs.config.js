(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'app',
        'rxjs': 'lib/rxjs',
        '@angular': 'lib/@angular'
    };

    /* '@shared': 'app/shared/components/'*/

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {main: 'index.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'}
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/forms',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/upgrade'
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = {main: 'index.js', defaultExtension: 'js'};
    });
    /*
        var customPackageList = [
            {
                path: '@shared/selectbox',
                name: 'selectbox'
            }
        ];

        // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
        customPackageList.forEach(function (pkg) {
            packages[pkg.path] = {main: pkg.name + '.component.js', defaultExtension: 'js'};
        });
    */

    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }

    System.config(config);

})(this);
