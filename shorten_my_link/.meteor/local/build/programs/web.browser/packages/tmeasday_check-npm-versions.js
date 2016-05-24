//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var exports;

var require = meteorInstall({"node_modules":{"meteor":{"tmeasday:check-npm-versions":{"check-npm-versions.js":["semver","meteor/underscore",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// packages/tmeasday_check-npm-versions/check-npm-versions.js                                        //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
exports.__esModule = true;                                                                           //
exports.checkNpmVersions = undefined;                                                                //
                                                                                                     //
var _semver = require('semver');                                                                     // 1
                                                                                                     //
var _semver2 = _interopRequireDefault(_semver);                                                      //
                                                                                                     //
var _underscore = require('meteor/underscore');                                                      // 2
                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }    //
                                                                                                     //
// Returns:                                                                                          //
//   - true      if a version of the package in the range is installed                               //
//   - false     if no version is installed                                                          //
//   - version#  if incompatible version is installed                                                //
var compatibleVersionIsInstalled = function compatibleVersionIsInstalled(name, range) {              // 8
  try {                                                                                              // 9
    var installedVersion = require(name + '/package.json').version;                                  // 10
    if (_semver2['default'].satisfies(installedVersion, range)) {                                    // 11
      return true;                                                                                   // 12
    } else {                                                                                         //
      return installedVersion;                                                                       // 14
    }                                                                                                //
  } catch (e) {                                                                                      //
    console.log(e);                                                                                  // 17
    // XXX I guess the only error here is that the module doesn't exist?                             //
    return false;                                                                                    // 16
  }                                                                                                  //
};                                                                                                   //
                                                                                                     //
var checkNpmVersions = exports.checkNpmVersions = function checkNpmVersions(packages, packageName) {
  var failures = {};                                                                                 // 24
  _underscore._.forEach(packages, function (range, name) {                                           // 25
    var failure = compatibleVersionIsInstalled(name, range);                                         // 26
    if (failure !== true) {                                                                          // 27
      failures[name] = failure;                                                                      // 28
    }                                                                                                //
  });                                                                                                //
                                                                                                     //
  if (_underscore._.keys(failures).length === 0) {                                                   // 32
    return true;                                                                                     // 33
  }                                                                                                  //
                                                                                                     //
  var errors = [];                                                                                   // 36
  _underscore._.forEach(failures, function (installed, name) {                                       // 37
    var requirement = name + '@' + packages[name];                                                   // 38
                                                                                                     //
    if (installed) {                                                                                 // 40
      errors.push(' - ' + name + '@' + installed + ' installed, ' + requirement + ' needed');        // 41
    } else {                                                                                         //
      errors.push(' - ' + name + '@' + packages[name] + ' not installed.');                          // 43
    }                                                                                                //
  });                                                                                                //
                                                                                                     //
  var qualifier = packageName ? '(for ' + packageName + ') ' : '';                                   // 47
  console.warn('WARNING: npm peer requirements ' + qualifier + 'not installed:\n' + errors.join('\n') + '\n\nRead more about installing npm peer dependencies:\n  http://guide.meteor.com/using-packages.html#peer-npm-dependencies\n');
};                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////

}],"node_modules":{"semver":{"package.json":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// ../npm/node_modules/semver/package.json                                                           //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
exports.name = "semver";                                                                             // 1
exports.version = "5.1.0";                                                                           // 2
exports.main = "semver.js";                                                                          // 3
                                                                                                     // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"semver.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// node_modules/meteor/tmeasday:check-npm-versions/node_modules/semver/semver.js                     //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
exports = module.exports = SemVer;                                                                   // 1
                                                                                                     // 2
// The debug function is excluded entirely from the minified version.                                // 3
/* nomin */ var debug;                                                                               // 4
/* nomin */ if (typeof process === 'object' &&                                                       // 5
    /* nomin */ process.env &&                                                                       // 6
    /* nomin */ process.env.NODE_DEBUG &&                                                            // 7
    /* nomin */ /\bsemver\b/i.test(process.env.NODE_DEBUG))                                          // 8
  /* nomin */ debug = function() {                                                                   // 9
    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);                                 // 10
    /* nomin */ args.unshift('SEMVER');                                                              // 11
    /* nomin */ console.log.apply(console, args);                                                    // 12
    /* nomin */ };                                                                                   // 13
/* nomin */ else                                                                                     // 14
  /* nomin */ debug = function() {};                                                                 // 15
                                                                                                     // 16
// Note: this is the semver.org version of the spec that it implements                               // 17
// Not necessarily the package version of this code.                                                 // 18
exports.SEMVER_SPEC_VERSION = '2.0.0';                                                               // 19
                                                                                                     // 20
var MAX_LENGTH = 256;                                                                                // 21
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;                                  // 22
                                                                                                     // 23
// The actual regexps go on exports.re                                                               // 24
var re = exports.re = [];                                                                            // 25
var src = exports.src = [];                                                                          // 26
var R = 0;                                                                                           // 27
                                                                                                     // 28
// The following Regular Expressions can be used for tokenizing,                                     // 29
// validating, and parsing SemVer version strings.                                                   // 30
                                                                                                     // 31
// ## Numeric Identifier                                                                             // 32
// A single `0`, or a non-zero digit followed by zero or more digits.                                // 33
                                                                                                     // 34
var NUMERICIDENTIFIER = R++;                                                                         // 35
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';                                                              // 36
var NUMERICIDENTIFIERLOOSE = R++;                                                                    // 37
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';                                                              // 38
                                                                                                     // 39
                                                                                                     // 40
// ## Non-numeric Identifier                                                                         // 41
// Zero or more digits, followed by a letter or hyphen, and then zero or                             // 42
// more letters, digits, or hyphens.                                                                 // 43
                                                                                                     // 44
var NONNUMERICIDENTIFIER = R++;                                                                      // 45
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';                                            // 46
                                                                                                     // 47
                                                                                                     // 48
// ## Main Version                                                                                   // 49
// Three dot-separated numeric identifiers.                                                          // 50
                                                                                                     // 51
var MAINVERSION = R++;                                                                               // 52
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +                                           // 53
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +                                           // 54
                   '(' + src[NUMERICIDENTIFIER] + ')';                                               // 55
                                                                                                     // 56
var MAINVERSIONLOOSE = R++;                                                                          // 57
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +                                 // 58
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +                                 // 59
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';                                     // 60
                                                                                                     // 61
// ## Pre-release Version Identifier                                                                 // 62
// A numeric identifier, or a non-numeric identifier.                                                // 63
                                                                                                     // 64
var PRERELEASEIDENTIFIER = R++;                                                                      // 65
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +                                         // 66
                            '|' + src[NONNUMERICIDENTIFIER] + ')';                                   // 67
                                                                                                     // 68
var PRERELEASEIDENTIFIERLOOSE = R++;                                                                 // 69
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +                               // 70
                                 '|' + src[NONNUMERICIDENTIFIER] + ')';                              // 71
                                                                                                     // 72
                                                                                                     // 73
// ## Pre-release Version                                                                            // 74
// Hyphen, followed by one or more dot-separated pre-release version                                 // 75
// identifiers.                                                                                      // 76
                                                                                                     // 77
var PRERELEASE = R++;                                                                                // 78
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +                                              // 79
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';                                     // 80
                                                                                                     // 81
var PRERELEASELOOSE = R++;                                                                           // 82
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +                                   // 83
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';                           // 84
                                                                                                     // 85
// ## Build Metadata Identifier                                                                      // 86
// Any combination of digits, letters, or hyphens.                                                   // 87
                                                                                                     // 88
var BUILDIDENTIFIER = R++;                                                                           // 89
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';                                                              // 90
                                                                                                     // 91
// ## Build Metadata                                                                                 // 92
// Plus sign, followed by one or more period-separated build metadata                                // 93
// identifiers.                                                                                      // 94
                                                                                                     // 95
var BUILD = R++;                                                                                     // 96
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +                                                      // 97
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';                                               // 98
                                                                                                     // 99
                                                                                                     // 100
// ## Full Version String                                                                            // 101
// A main version, followed optionally by a pre-release version and                                  // 102
// build metadata.                                                                                   // 103
                                                                                                     // 104
// Note that the only major, minor, patch, and pre-release sections of                               // 105
// the version string are capturing groups.  The build metadata is not a                             // 106
// capturing group, because it should not ever be used in version                                    // 107
// comparison.                                                                                       // 108
                                                                                                     // 109
var FULL = R++;                                                                                      // 110
var FULLPLAIN = 'v?' + src[MAINVERSION] +                                                            // 111
                src[PRERELEASE] + '?' +                                                              // 112
                src[BUILD] + '?';                                                                    // 113
                                                                                                     // 114
src[FULL] = '^' + FULLPLAIN + '$';                                                                   // 115
                                                                                                     // 116
// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.                               // 117
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty                                 // 118
// common in the npm registry.                                                                       // 119
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +                                                // 120
                 src[PRERELEASELOOSE] + '?' +                                                        // 121
                 src[BUILD] + '?';                                                                   // 122
                                                                                                     // 123
var LOOSE = R++;                                                                                     // 124
src[LOOSE] = '^' + LOOSEPLAIN + '$';                                                                 // 125
                                                                                                     // 126
var GTLT = R++;                                                                                      // 127
src[GTLT] = '((?:<|>)?=?)';                                                                          // 128
                                                                                                     // 129
// Something like "2.*" or "1.2.x".                                                                  // 130
// Note that "x.x" is a valid xRange identifer, meaning "any version"                                // 131
// Only the first item is strictly required.                                                         // 132
var XRANGEIDENTIFIERLOOSE = R++;                                                                     // 133
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';                               // 134
var XRANGEIDENTIFIER = R++;                                                                          // 135
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';                                         // 136
                                                                                                     // 137
var XRANGEPLAIN = R++;                                                                               // 138
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +                                       // 139
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +                                         // 140
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +                                         // 141
                   '(?:' + src[PRERELEASE] + ')?' +                                                  // 142
                   src[BUILD] + '?' +                                                                // 143
                   ')?)?';                                                                           // 144
                                                                                                     // 145
var XRANGEPLAINLOOSE = R++;                                                                          // 146
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +                             // 147
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +                               // 148
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +                               // 149
                        '(?:' + src[PRERELEASELOOSE] + ')?' +                                        // 150
                        src[BUILD] + '?' +                                                           // 151
                        ')?)?';                                                                      // 152
                                                                                                     // 153
var XRANGE = R++;                                                                                    // 154
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';                                     // 155
var XRANGELOOSE = R++;                                                                               // 156
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';                           // 157
                                                                                                     // 158
// Tilde ranges.                                                                                     // 159
// Meaning is "reasonably at or greater than"                                                        // 160
var LONETILDE = R++;                                                                                 // 161
src[LONETILDE] = '(?:~>?)';                                                                          // 162
                                                                                                     // 163
var TILDETRIM = R++;                                                                                 // 164
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';                                                 // 165
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');                                                     // 166
var tildeTrimReplace = '$1~';                                                                        // 167
                                                                                                     // 168
var TILDE = R++;                                                                                     // 169
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';                                          // 170
var TILDELOOSE = R++;                                                                                // 171
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';                                // 172
                                                                                                     // 173
// Caret ranges.                                                                                     // 174
// Meaning is "at least and backwards compatible with"                                               // 175
var LONECARET = R++;                                                                                 // 176
src[LONECARET] = '(?:\\^)';                                                                          // 177
                                                                                                     // 178
var CARETTRIM = R++;                                                                                 // 179
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';                                                 // 180
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');                                                     // 181
var caretTrimReplace = '$1^';                                                                        // 182
                                                                                                     // 183
var CARET = R++;                                                                                     // 184
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';                                          // 185
var CARETLOOSE = R++;                                                                                // 186
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';                                // 187
                                                                                                     // 188
// A simple gt/lt/eq thing, or just "" to indicate "any version"                                     // 189
var COMPARATORLOOSE = R++;                                                                           // 190
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';                             // 191
var COMPARATOR = R++;                                                                                // 192
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';                                   // 193
                                                                                                     // 194
                                                                                                     // 195
// An expression to strip any whitespace between the gtlt and the thing                              // 196
// it modifies, so that `> 1.2.3` ==> `>1.2.3`                                                       // 197
var COMPARATORTRIM = R++;                                                                            // 198
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +                                                         // 199
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';                           // 200
                                                                                                     // 201
// this one has to use the /g flag                                                                   // 202
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');                                           // 203
var comparatorTrimReplace = '$1$2$3';                                                                // 204
                                                                                                     // 205
                                                                                                     // 206
// Something like `1.2.3 - 1.2.4`                                                                    // 207
// Note that these all use the loose form, because they'll be                                        // 208
// checked against either the strict or loose comparator form                                        // 209
// later.                                                                                            // 210
var HYPHENRANGE = R++;                                                                               // 211
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +                                               // 212
                   '\\s+-\\s+' +                                                                     // 213
                   '(' + src[XRANGEPLAIN] + ')' +                                                    // 214
                   '\\s*$';                                                                          // 215
                                                                                                     // 216
var HYPHENRANGELOOSE = R++;                                                                          // 217
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +                                     // 218
                        '\\s+-\\s+' +                                                                // 219
                        '(' + src[XRANGEPLAINLOOSE] + ')' +                                          // 220
                        '\\s*$';                                                                     // 221
                                                                                                     // 222
// Star ranges basically just allow anything at all.                                                 // 223
var STAR = R++;                                                                                      // 224
src[STAR] = '(<|>)?=?\\s*\\*';                                                                       // 225
                                                                                                     // 226
// Compile to actual regexp objects.                                                                 // 227
// All are flag-free, unless they were created above with a flag.                                    // 228
for (var i = 0; i < R; i++) {                                                                        // 229
  debug(i, src[i]);                                                                                  // 230
  if (!re[i])                                                                                        // 231
    re[i] = new RegExp(src[i]);                                                                      // 232
}                                                                                                    // 233
                                                                                                     // 234
exports.parse = parse;                                                                               // 235
function parse(version, loose) {                                                                     // 236
  if (version instanceof SemVer)                                                                     // 237
    return version;                                                                                  // 238
                                                                                                     // 239
  if (typeof version !== 'string')                                                                   // 240
    return null;                                                                                     // 241
                                                                                                     // 242
  if (version.length > MAX_LENGTH)                                                                   // 243
    return null;                                                                                     // 244
                                                                                                     // 245
  var r = loose ? re[LOOSE] : re[FULL];                                                              // 246
  if (!r.test(version))                                                                              // 247
    return null;                                                                                     // 248
                                                                                                     // 249
  try {                                                                                              // 250
    return new SemVer(version, loose);                                                               // 251
  } catch (er) {                                                                                     // 252
    return null;                                                                                     // 253
  }                                                                                                  // 254
}                                                                                                    // 255
                                                                                                     // 256
exports.valid = valid;                                                                               // 257
function valid(version, loose) {                                                                     // 258
  var v = parse(version, loose);                                                                     // 259
  return v ? v.version : null;                                                                       // 260
}                                                                                                    // 261
                                                                                                     // 262
                                                                                                     // 263
exports.clean = clean;                                                                               // 264
function clean(version, loose) {                                                                     // 265
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);                                        // 266
  return s ? s.version : null;                                                                       // 267
}                                                                                                    // 268
                                                                                                     // 269
exports.SemVer = SemVer;                                                                             // 270
                                                                                                     // 271
function SemVer(version, loose) {                                                                    // 272
  if (version instanceof SemVer) {                                                                   // 273
    if (version.loose === loose)                                                                     // 274
      return version;                                                                                // 275
    else                                                                                             // 276
      version = version.version;                                                                     // 277
  } else if (typeof version !== 'string') {                                                          // 278
    throw new TypeError('Invalid Version: ' + version);                                              // 279
  }                                                                                                  // 280
                                                                                                     // 281
  if (version.length > MAX_LENGTH)                                                                   // 282
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')                      // 283
                                                                                                     // 284
  if (!(this instanceof SemVer))                                                                     // 285
    return new SemVer(version, loose);                                                               // 286
                                                                                                     // 287
  debug('SemVer', version, loose);                                                                   // 288
  this.loose = loose;                                                                                // 289
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);                                        // 290
                                                                                                     // 291
  if (!m)                                                                                            // 292
    throw new TypeError('Invalid Version: ' + version);                                              // 293
                                                                                                     // 294
  this.raw = version;                                                                                // 295
                                                                                                     // 296
  // these are actually numbers                                                                      // 297
  this.major = +m[1];                                                                                // 298
  this.minor = +m[2];                                                                                // 299
  this.patch = +m[3];                                                                                // 300
                                                                                                     // 301
  if (this.major > MAX_SAFE_INTEGER || this.major < 0)                                               // 302
    throw new TypeError('Invalid major version')                                                     // 303
                                                                                                     // 304
  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)                                               // 305
    throw new TypeError('Invalid minor version')                                                     // 306
                                                                                                     // 307
  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)                                               // 308
    throw new TypeError('Invalid patch version')                                                     // 309
                                                                                                     // 310
  // numberify any prerelease numeric ids                                                            // 311
  if (!m[4])                                                                                         // 312
    this.prerelease = [];                                                                            // 313
  else                                                                                               // 314
    this.prerelease = m[4].split('.').map(function(id) {                                             // 315
      if (/^[0-9]+$/.test(id)) {                                                                     // 316
        var num = +id                                                                                // 317
        if (num >= 0 && num < MAX_SAFE_INTEGER)                                                      // 318
          return num                                                                                 // 319
      }                                                                                              // 320
      return id;                                                                                     // 321
    });                                                                                              // 322
                                                                                                     // 323
  this.build = m[5] ? m[5].split('.') : [];                                                          // 324
  this.format();                                                                                     // 325
}                                                                                                    // 326
                                                                                                     // 327
SemVer.prototype.format = function() {                                                               // 328
  this.version = this.major + '.' + this.minor + '.' + this.patch;                                   // 329
  if (this.prerelease.length)                                                                        // 330
    this.version += '-' + this.prerelease.join('.');                                                 // 331
  return this.version;                                                                               // 332
};                                                                                                   // 333
                                                                                                     // 334
SemVer.prototype.toString = function() {                                                             // 335
  return this.version;                                                                               // 336
};                                                                                                   // 337
                                                                                                     // 338
SemVer.prototype.compare = function(other) {                                                         // 339
  debug('SemVer.compare', this.version, this.loose, other);                                          // 340
  if (!(other instanceof SemVer))                                                                    // 341
    other = new SemVer(other, this.loose);                                                           // 342
                                                                                                     // 343
  return this.compareMain(other) || this.comparePre(other);                                          // 344
};                                                                                                   // 345
                                                                                                     // 346
SemVer.prototype.compareMain = function(other) {                                                     // 347
  if (!(other instanceof SemVer))                                                                    // 348
    other = new SemVer(other, this.loose);                                                           // 349
                                                                                                     // 350
  return compareIdentifiers(this.major, other.major) ||                                              // 351
         compareIdentifiers(this.minor, other.minor) ||                                              // 352
         compareIdentifiers(this.patch, other.patch);                                                // 353
};                                                                                                   // 354
                                                                                                     // 355
SemVer.prototype.comparePre = function(other) {                                                      // 356
  if (!(other instanceof SemVer))                                                                    // 357
    other = new SemVer(other, this.loose);                                                           // 358
                                                                                                     // 359
  // NOT having a prerelease is > having one                                                         // 360
  if (this.prerelease.length && !other.prerelease.length)                                            // 361
    return -1;                                                                                       // 362
  else if (!this.prerelease.length && other.prerelease.length)                                       // 363
    return 1;                                                                                        // 364
  else if (!this.prerelease.length && !other.prerelease.length)                                      // 365
    return 0;                                                                                        // 366
                                                                                                     // 367
  var i = 0;                                                                                         // 368
  do {                                                                                               // 369
    var a = this.prerelease[i];                                                                      // 370
    var b = other.prerelease[i];                                                                     // 371
    debug('prerelease compare', i, a, b);                                                            // 372
    if (a === undefined && b === undefined)                                                          // 373
      return 0;                                                                                      // 374
    else if (b === undefined)                                                                        // 375
      return 1;                                                                                      // 376
    else if (a === undefined)                                                                        // 377
      return -1;                                                                                     // 378
    else if (a === b)                                                                                // 379
      continue;                                                                                      // 380
    else                                                                                             // 381
      return compareIdentifiers(a, b);                                                               // 382
  } while (++i);                                                                                     // 383
};                                                                                                   // 384
                                                                                                     // 385
// preminor will bump the version up to the next minor release, and immediately                      // 386
// down to pre-release. premajor and prepatch work the same way.                                     // 387
SemVer.prototype.inc = function(release, identifier) {                                               // 388
  switch (release) {                                                                                 // 389
    case 'premajor':                                                                                 // 390
      this.prerelease.length = 0;                                                                    // 391
      this.patch = 0;                                                                                // 392
      this.minor = 0;                                                                                // 393
      this.major++;                                                                                  // 394
      this.inc('pre', identifier);                                                                   // 395
      break;                                                                                         // 396
    case 'preminor':                                                                                 // 397
      this.prerelease.length = 0;                                                                    // 398
      this.patch = 0;                                                                                // 399
      this.minor++;                                                                                  // 400
      this.inc('pre', identifier);                                                                   // 401
      break;                                                                                         // 402
    case 'prepatch':                                                                                 // 403
      // If this is already a prerelease, it will bump to the next version                           // 404
      // drop any prereleases that might already exist, since they are not                           // 405
      // relevant at this point.                                                                     // 406
      this.prerelease.length = 0;                                                                    // 407
      this.inc('patch', identifier);                                                                 // 408
      this.inc('pre', identifier);                                                                   // 409
      break;                                                                                         // 410
    // If the input is a non-prerelease version, this acts the same as                               // 411
    // prepatch.                                                                                     // 412
    case 'prerelease':                                                                               // 413
      if (this.prerelease.length === 0)                                                              // 414
        this.inc('patch', identifier);                                                               // 415
      this.inc('pre', identifier);                                                                   // 416
      break;                                                                                         // 417
                                                                                                     // 418
    case 'major':                                                                                    // 419
      // If this is a pre-major version, bump up to the same major version.                          // 420
      // Otherwise increment major.                                                                  // 421
      // 1.0.0-5 bumps to 1.0.0                                                                      // 422
      // 1.1.0 bumps to 2.0.0                                                                        // 423
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)                      // 424
        this.major++;                                                                                // 425
      this.minor = 0;                                                                                // 426
      this.patch = 0;                                                                                // 427
      this.prerelease = [];                                                                          // 428
      break;                                                                                         // 429
    case 'minor':                                                                                    // 430
      // If this is a pre-minor version, bump up to the same minor version.                          // 431
      // Otherwise increment minor.                                                                  // 432
      // 1.2.0-5 bumps to 1.2.0                                                                      // 433
      // 1.2.1 bumps to 1.3.0                                                                        // 434
      if (this.patch !== 0 || this.prerelease.length === 0)                                          // 435
        this.minor++;                                                                                // 436
      this.patch = 0;                                                                                // 437
      this.prerelease = [];                                                                          // 438
      break;                                                                                         // 439
    case 'patch':                                                                                    // 440
      // If this is not a pre-release version, it will increment the patch.                          // 441
      // If it is a pre-release it will bump up to the same patch version.                           // 442
      // 1.2.0-5 patches to 1.2.0                                                                    // 443
      // 1.2.0 patches to 1.2.1                                                                      // 444
      if (this.prerelease.length === 0)                                                              // 445
        this.patch++;                                                                                // 446
      this.prerelease = [];                                                                          // 447
      break;                                                                                         // 448
    // This probably shouldn't be used publicly.                                                     // 449
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.                                // 450
    case 'pre':                                                                                      // 451
      if (this.prerelease.length === 0)                                                              // 452
        this.prerelease = [0];                                                                       // 453
      else {                                                                                         // 454
        var i = this.prerelease.length;                                                              // 455
        while (--i >= 0) {                                                                           // 456
          if (typeof this.prerelease[i] === 'number') {                                              // 457
            this.prerelease[i]++;                                                                    // 458
            i = -2;                                                                                  // 459
          }                                                                                          // 460
        }                                                                                            // 461
        if (i === -1) // didn't increment anything                                                   // 462
          this.prerelease.push(0);                                                                   // 463
      }                                                                                              // 464
      if (identifier) {                                                                              // 465
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,                                                       // 466
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0                                     // 467
        if (this.prerelease[0] === identifier) {                                                     // 468
          if (isNaN(this.prerelease[1]))                                                             // 469
            this.prerelease = [identifier, 0];                                                       // 470
        } else                                                                                       // 471
          this.prerelease = [identifier, 0];                                                         // 472
      }                                                                                              // 473
      break;                                                                                         // 474
                                                                                                     // 475
    default:                                                                                         // 476
      throw new Error('invalid increment argument: ' + release);                                     // 477
  }                                                                                                  // 478
  this.format();                                                                                     // 479
  this.raw = this.version;                                                                           // 480
  return this;                                                                                       // 481
};                                                                                                   // 482
                                                                                                     // 483
exports.inc = inc;                                                                                   // 484
function inc(version, release, loose, identifier) {                                                  // 485
  if (typeof(loose) === 'string') {                                                                  // 486
    identifier = loose;                                                                              // 487
    loose = undefined;                                                                               // 488
  }                                                                                                  // 489
                                                                                                     // 490
  try {                                                                                              // 491
    return new SemVer(version, loose).inc(release, identifier).version;                              // 492
  } catch (er) {                                                                                     // 493
    return null;                                                                                     // 494
  }                                                                                                  // 495
}                                                                                                    // 496
                                                                                                     // 497
exports.diff = diff;                                                                                 // 498
function diff(version1, version2) {                                                                  // 499
  if (eq(version1, version2)) {                                                                      // 500
    return null;                                                                                     // 501
  } else {                                                                                           // 502
    var v1 = parse(version1);                                                                        // 503
    var v2 = parse(version2);                                                                        // 504
    if (v1.prerelease.length || v2.prerelease.length) {                                              // 505
      for (var key in v1) {                                                                          // 506
        if (key === 'major' || key === 'minor' || key === 'patch') {                                 // 507
          if (v1[key] !== v2[key]) {                                                                 // 508
            return 'pre'+key;                                                                        // 509
          }                                                                                          // 510
        }                                                                                            // 511
      }                                                                                              // 512
      return 'prerelease';                                                                           // 513
    }                                                                                                // 514
    for (var key in v1) {                                                                            // 515
      if (key === 'major' || key === 'minor' || key === 'patch') {                                   // 516
        if (v1[key] !== v2[key]) {                                                                   // 517
          return key;                                                                                // 518
        }                                                                                            // 519
      }                                                                                              // 520
    }                                                                                                // 521
  }                                                                                                  // 522
}                                                                                                    // 523
                                                                                                     // 524
exports.compareIdentifiers = compareIdentifiers;                                                     // 525
                                                                                                     // 526
var numeric = /^[0-9]+$/;                                                                            // 527
function compareIdentifiers(a, b) {                                                                  // 528
  var anum = numeric.test(a);                                                                        // 529
  var bnum = numeric.test(b);                                                                        // 530
                                                                                                     // 531
  if (anum && bnum) {                                                                                // 532
    a = +a;                                                                                          // 533
    b = +b;                                                                                          // 534
  }                                                                                                  // 535
                                                                                                     // 536
  return (anum && !bnum) ? -1 :                                                                      // 537
         (bnum && !anum) ? 1 :                                                                       // 538
         a < b ? -1 :                                                                                // 539
         a > b ? 1 :                                                                                 // 540
         0;                                                                                          // 541
}                                                                                                    // 542
                                                                                                     // 543
exports.rcompareIdentifiers = rcompareIdentifiers;                                                   // 544
function rcompareIdentifiers(a, b) {                                                                 // 545
  return compareIdentifiers(b, a);                                                                   // 546
}                                                                                                    // 547
                                                                                                     // 548
exports.major = major;                                                                               // 549
function major(a, loose) {                                                                           // 550
  return new SemVer(a, loose).major;                                                                 // 551
}                                                                                                    // 552
                                                                                                     // 553
exports.minor = minor;                                                                               // 554
function minor(a, loose) {                                                                           // 555
  return new SemVer(a, loose).minor;                                                                 // 556
}                                                                                                    // 557
                                                                                                     // 558
exports.patch = patch;                                                                               // 559
function patch(a, loose) {                                                                           // 560
  return new SemVer(a, loose).patch;                                                                 // 561
}                                                                                                    // 562
                                                                                                     // 563
exports.compare = compare;                                                                           // 564
function compare(a, b, loose) {                                                                      // 565
  return new SemVer(a, loose).compare(b);                                                            // 566
}                                                                                                    // 567
                                                                                                     // 568
exports.compareLoose = compareLoose;                                                                 // 569
function compareLoose(a, b) {                                                                        // 570
  return compare(a, b, true);                                                                        // 571
}                                                                                                    // 572
                                                                                                     // 573
exports.rcompare = rcompare;                                                                         // 574
function rcompare(a, b, loose) {                                                                     // 575
  return compare(b, a, loose);                                                                       // 576
}                                                                                                    // 577
                                                                                                     // 578
exports.sort = sort;                                                                                 // 579
function sort(list, loose) {                                                                         // 580
  return list.sort(function(a, b) {                                                                  // 581
    return exports.compare(a, b, loose);                                                             // 582
  });                                                                                                // 583
}                                                                                                    // 584
                                                                                                     // 585
exports.rsort = rsort;                                                                               // 586
function rsort(list, loose) {                                                                        // 587
  return list.sort(function(a, b) {                                                                  // 588
    return exports.rcompare(a, b, loose);                                                            // 589
  });                                                                                                // 590
}                                                                                                    // 591
                                                                                                     // 592
exports.gt = gt;                                                                                     // 593
function gt(a, b, loose) {                                                                           // 594
  return compare(a, b, loose) > 0;                                                                   // 595
}                                                                                                    // 596
                                                                                                     // 597
exports.lt = lt;                                                                                     // 598
function lt(a, b, loose) {                                                                           // 599
  return compare(a, b, loose) < 0;                                                                   // 600
}                                                                                                    // 601
                                                                                                     // 602
exports.eq = eq;                                                                                     // 603
function eq(a, b, loose) {                                                                           // 604
  return compare(a, b, loose) === 0;                                                                 // 605
}                                                                                                    // 606
                                                                                                     // 607
exports.neq = neq;                                                                                   // 608
function neq(a, b, loose) {                                                                          // 609
  return compare(a, b, loose) !== 0;                                                                 // 610
}                                                                                                    // 611
                                                                                                     // 612
exports.gte = gte;                                                                                   // 613
function gte(a, b, loose) {                                                                          // 614
  return compare(a, b, loose) >= 0;                                                                  // 615
}                                                                                                    // 616
                                                                                                     // 617
exports.lte = lte;                                                                                   // 618
function lte(a, b, loose) {                                                                          // 619
  return compare(a, b, loose) <= 0;                                                                  // 620
}                                                                                                    // 621
                                                                                                     // 622
exports.cmp = cmp;                                                                                   // 623
function cmp(a, op, b, loose) {                                                                      // 624
  var ret;                                                                                           // 625
  switch (op) {                                                                                      // 626
    case '===':                                                                                      // 627
      if (typeof a === 'object') a = a.version;                                                      // 628
      if (typeof b === 'object') b = b.version;                                                      // 629
      ret = a === b;                                                                                 // 630
      break;                                                                                         // 631
    case '!==':                                                                                      // 632
      if (typeof a === 'object') a = a.version;                                                      // 633
      if (typeof b === 'object') b = b.version;                                                      // 634
      ret = a !== b;                                                                                 // 635
      break;                                                                                         // 636
    case '': case '=': case '==': ret = eq(a, b, loose); break;                                      // 637
    case '!=': ret = neq(a, b, loose); break;                                                        // 638
    case '>': ret = gt(a, b, loose); break;                                                          // 639
    case '>=': ret = gte(a, b, loose); break;                                                        // 640
    case '<': ret = lt(a, b, loose); break;                                                          // 641
    case '<=': ret = lte(a, b, loose); break;                                                        // 642
    default: throw new TypeError('Invalid operator: ' + op);                                         // 643
  }                                                                                                  // 644
  return ret;                                                                                        // 645
}                                                                                                    // 646
                                                                                                     // 647
exports.Comparator = Comparator;                                                                     // 648
function Comparator(comp, loose) {                                                                   // 649
  if (comp instanceof Comparator) {                                                                  // 650
    if (comp.loose === loose)                                                                        // 651
      return comp;                                                                                   // 652
    else                                                                                             // 653
      comp = comp.value;                                                                             // 654
  }                                                                                                  // 655
                                                                                                     // 656
  if (!(this instanceof Comparator))                                                                 // 657
    return new Comparator(comp, loose);                                                              // 658
                                                                                                     // 659
  debug('comparator', comp, loose);                                                                  // 660
  this.loose = loose;                                                                                // 661
  this.parse(comp);                                                                                  // 662
                                                                                                     // 663
  if (this.semver === ANY)                                                                           // 664
    this.value = '';                                                                                 // 665
  else                                                                                               // 666
    this.value = this.operator + this.semver.version;                                                // 667
                                                                                                     // 668
  debug('comp', this);                                                                               // 669
}                                                                                                    // 670
                                                                                                     // 671
var ANY = {};                                                                                        // 672
Comparator.prototype.parse = function(comp) {                                                        // 673
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];                                         // 674
  var m = comp.match(r);                                                                             // 675
                                                                                                     // 676
  if (!m)                                                                                            // 677
    throw new TypeError('Invalid comparator: ' + comp);                                              // 678
                                                                                                     // 679
  this.operator = m[1];                                                                              // 680
  if (this.operator === '=')                                                                         // 681
    this.operator = '';                                                                              // 682
                                                                                                     // 683
  // if it literally is just '>' or '' then allow anything.                                          // 684
  if (!m[2])                                                                                         // 685
    this.semver = ANY;                                                                               // 686
  else                                                                                               // 687
    this.semver = new SemVer(m[2], this.loose);                                                      // 688
};                                                                                                   // 689
                                                                                                     // 690
Comparator.prototype.toString = function() {                                                         // 691
  return this.value;                                                                                 // 692
};                                                                                                   // 693
                                                                                                     // 694
Comparator.prototype.test = function(version) {                                                      // 695
  debug('Comparator.test', version, this.loose);                                                     // 696
                                                                                                     // 697
  if (this.semver === ANY)                                                                           // 698
    return true;                                                                                     // 699
                                                                                                     // 700
  if (typeof version === 'string')                                                                   // 701
    version = new SemVer(version, this.loose);                                                       // 702
                                                                                                     // 703
  return cmp(version, this.operator, this.semver, this.loose);                                       // 704
};                                                                                                   // 705
                                                                                                     // 706
                                                                                                     // 707
exports.Range = Range;                                                                               // 708
function Range(range, loose) {                                                                       // 709
  if ((range instanceof Range) && range.loose === loose)                                             // 710
    return range;                                                                                    // 711
                                                                                                     // 712
  if (!(this instanceof Range))                                                                      // 713
    return new Range(range, loose);                                                                  // 714
                                                                                                     // 715
  this.loose = loose;                                                                                // 716
                                                                                                     // 717
  // First, split based on boolean or ||                                                             // 718
  this.raw = range;                                                                                  // 719
  this.set = range.split(/\s*\|\|\s*/).map(function(range) {                                         // 720
    return this.parseRange(range.trim());                                                            // 721
  }, this).filter(function(c) {                                                                      // 722
    // throw out any that are not relevant for whatever reason                                       // 723
    return c.length;                                                                                 // 724
  });                                                                                                // 725
                                                                                                     // 726
  if (!this.set.length) {                                                                            // 727
    throw new TypeError('Invalid SemVer Range: ' + range);                                           // 728
  }                                                                                                  // 729
                                                                                                     // 730
  this.format();                                                                                     // 731
}                                                                                                    // 732
                                                                                                     // 733
Range.prototype.format = function() {                                                                // 734
  this.range = this.set.map(function(comps) {                                                        // 735
    return comps.join(' ').trim();                                                                   // 736
  }).join('||').trim();                                                                              // 737
  return this.range;                                                                                 // 738
};                                                                                                   // 739
                                                                                                     // 740
Range.prototype.toString = function() {                                                              // 741
  return this.range;                                                                                 // 742
};                                                                                                   // 743
                                                                                                     // 744
Range.prototype.parseRange = function(range) {                                                       // 745
  var loose = this.loose;                                                                            // 746
  range = range.trim();                                                                              // 747
  debug('range', range, loose);                                                                      // 748
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`                                                            // 749
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];                                           // 750
  range = range.replace(hr, hyphenReplace);                                                          // 751
  debug('hyphen replace', range);                                                                    // 752
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`                                                            // 753
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);                                  // 754
  debug('comparator trim', range, re[COMPARATORTRIM]);                                               // 755
                                                                                                     // 756
  // `~ 1.2.3` => `~1.2.3`                                                                           // 757
  range = range.replace(re[TILDETRIM], tildeTrimReplace);                                            // 758
                                                                                                     // 759
  // `^ 1.2.3` => `^1.2.3`                                                                           // 760
  range = range.replace(re[CARETTRIM], caretTrimReplace);                                            // 761
                                                                                                     // 762
  // normalize spaces                                                                                // 763
  range = range.split(/\s+/).join(' ');                                                              // 764
                                                                                                     // 765
  // At this point, the range is completely trimmed and                                              // 766
  // ready to be split into comparators.                                                             // 767
                                                                                                     // 768
  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];                                         // 769
  var set = range.split(' ').map(function(comp) {                                                    // 770
    return parseComparator(comp, loose);                                                             // 771
  }).join(' ').split(/\s+/);                                                                         // 772
  if (this.loose) {                                                                                  // 773
    // in loose mode, throw out any that are not valid comparators                                   // 774
    set = set.filter(function(comp) {                                                                // 775
      return !!comp.match(compRe);                                                                   // 776
    });                                                                                              // 777
  }                                                                                                  // 778
  set = set.map(function(comp) {                                                                     // 779
    return new Comparator(comp, loose);                                                              // 780
  });                                                                                                // 781
                                                                                                     // 782
  return set;                                                                                        // 783
};                                                                                                   // 784
                                                                                                     // 785
// Mostly just for testing and legacy API reasons                                                    // 786
exports.toComparators = toComparators;                                                               // 787
function toComparators(range, loose) {                                                               // 788
  return new Range(range, loose).set.map(function(comp) {                                            // 789
    return comp.map(function(c) {                                                                    // 790
      return c.value;                                                                                // 791
    }).join(' ').trim().split(' ');                                                                  // 792
  });                                                                                                // 793
}                                                                                                    // 794
                                                                                                     // 795
// comprised of xranges, tildes, stars, and gtlt's at this point.                                    // 796
// already replaced the hyphen ranges                                                                // 797
// turn into a set of JUST comparators.                                                              // 798
function parseComparator(comp, loose) {                                                              // 799
  debug('comp', comp);                                                                               // 800
  comp = replaceCarets(comp, loose);                                                                 // 801
  debug('caret', comp);                                                                              // 802
  comp = replaceTildes(comp, loose);                                                                 // 803
  debug('tildes', comp);                                                                             // 804
  comp = replaceXRanges(comp, loose);                                                                // 805
  debug('xrange', comp);                                                                             // 806
  comp = replaceStars(comp, loose);                                                                  // 807
  debug('stars', comp);                                                                              // 808
  return comp;                                                                                       // 809
}                                                                                                    // 810
                                                                                                     // 811
function isX(id) {                                                                                   // 812
  return !id || id.toLowerCase() === 'x' || id === '*';                                              // 813
}                                                                                                    // 814
                                                                                                     // 815
// ~, ~> --> * (any, kinda silly)                                                                    // 816
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0                                           // 817
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0                                                   // 818
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0                                                   // 819
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0                                                                // 820
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0                                                                // 821
function replaceTildes(comp, loose) {                                                                // 822
  return comp.trim().split(/\s+/).map(function(comp) {                                               // 823
    return replaceTilde(comp, loose);                                                                // 824
  }).join(' ');                                                                                      // 825
}                                                                                                    // 826
                                                                                                     // 827
function replaceTilde(comp, loose) {                                                                 // 828
  var r = loose ? re[TILDELOOSE] : re[TILDE];                                                        // 829
  return comp.replace(r, function(_, M, m, p, pr) {                                                  // 830
    debug('tilde', comp, _, M, m, p, pr);                                                            // 831
    var ret;                                                                                         // 832
                                                                                                     // 833
    if (isX(M))                                                                                      // 834
      ret = '';                                                                                      // 835
    else if (isX(m))                                                                                 // 836
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';                                                 // 837
    else if (isX(p))                                                                                 // 838
      // ~1.2 == >=1.2.0- <1.3.0-                                                                    // 839
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';                                 // 840
    else if (pr) {                                                                                   // 841
      debug('replaceTilde pr', pr);                                                                  // 842
      if (pr.charAt(0) !== '-')                                                                      // 843
        pr = '-' + pr;                                                                               // 844
      ret = '>=' + M + '.' + m + '.' + p + pr +                                                      // 845
            ' <' + M + '.' + (+m + 1) + '.0';                                                        // 846
    } else                                                                                           // 847
      // ~1.2.3 == >=1.2.3 <1.3.0                                                                    // 848
      ret = '>=' + M + '.' + m + '.' + p +                                                           // 849
            ' <' + M + '.' + (+m + 1) + '.0';                                                        // 850
                                                                                                     // 851
    debug('tilde return', ret);                                                                      // 852
    return ret;                                                                                      // 853
  });                                                                                                // 854
}                                                                                                    // 855
                                                                                                     // 856
// ^ --> * (any, kinda silly)                                                                        // 857
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0                                                               // 858
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0                                                                   // 859
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0                                                                   // 860
// ^1.2.3 --> >=1.2.3 <2.0.0                                                                         // 861
// ^1.2.0 --> >=1.2.0 <2.0.0                                                                         // 862
function replaceCarets(comp, loose) {                                                                // 863
  return comp.trim().split(/\s+/).map(function(comp) {                                               // 864
    return replaceCaret(comp, loose);                                                                // 865
  }).join(' ');                                                                                      // 866
}                                                                                                    // 867
                                                                                                     // 868
function replaceCaret(comp, loose) {                                                                 // 869
  debug('caret', comp, loose);                                                                       // 870
  var r = loose ? re[CARETLOOSE] : re[CARET];                                                        // 871
  return comp.replace(r, function(_, M, m, p, pr) {                                                  // 872
    debug('caret', comp, _, M, m, p, pr);                                                            // 873
    var ret;                                                                                         // 874
                                                                                                     // 875
    if (isX(M))                                                                                      // 876
      ret = '';                                                                                      // 877
    else if (isX(m))                                                                                 // 878
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';                                                 // 879
    else if (isX(p)) {                                                                               // 880
      if (M === '0')                                                                                 // 881
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';                               // 882
      else                                                                                           // 883
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';                                       // 884
    } else if (pr) {                                                                                 // 885
      debug('replaceCaret pr', pr);                                                                  // 886
      if (pr.charAt(0) !== '-')                                                                      // 887
        pr = '-' + pr;                                                                               // 888
      if (M === '0') {                                                                               // 889
        if (m === '0')                                                                               // 890
          ret = '>=' + M + '.' + m + '.' + p + pr +                                                  // 891
                ' <' + M + '.' + m + '.' + (+p + 1);                                                 // 892
        else                                                                                         // 893
          ret = '>=' + M + '.' + m + '.' + p + pr +                                                  // 894
                ' <' + M + '.' + (+m + 1) + '.0';                                                    // 895
      } else                                                                                         // 896
        ret = '>=' + M + '.' + m + '.' + p + pr +                                                    // 897
              ' <' + (+M + 1) + '.0.0';                                                              // 898
    } else {                                                                                         // 899
      debug('no pr');                                                                                // 900
      if (M === '0') {                                                                               // 901
        if (m === '0')                                                                               // 902
          ret = '>=' + M + '.' + m + '.' + p +                                                       // 903
                ' <' + M + '.' + m + '.' + (+p + 1);                                                 // 904
        else                                                                                         // 905
          ret = '>=' + M + '.' + m + '.' + p +                                                       // 906
                ' <' + M + '.' + (+m + 1) + '.0';                                                    // 907
      } else                                                                                         // 908
        ret = '>=' + M + '.' + m + '.' + p +                                                         // 909
              ' <' + (+M + 1) + '.0.0';                                                              // 910
    }                                                                                                // 911
                                                                                                     // 912
    debug('caret return', ret);                                                                      // 913
    return ret;                                                                                      // 914
  });                                                                                                // 915
}                                                                                                    // 916
                                                                                                     // 917
function replaceXRanges(comp, loose) {                                                               // 918
  debug('replaceXRanges', comp, loose);                                                              // 919
  return comp.split(/\s+/).map(function(comp) {                                                      // 920
    return replaceXRange(comp, loose);                                                               // 921
  }).join(' ');                                                                                      // 922
}                                                                                                    // 923
                                                                                                     // 924
function replaceXRange(comp, loose) {                                                                // 925
  comp = comp.trim();                                                                                // 926
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];                                                      // 927
  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {                                          // 928
    debug('xRange', comp, ret, gtlt, M, m, p, pr);                                                   // 929
    var xM = isX(M);                                                                                 // 930
    var xm = xM || isX(m);                                                                           // 931
    var xp = xm || isX(p);                                                                           // 932
    var anyX = xp;                                                                                   // 933
                                                                                                     // 934
    if (gtlt === '=' && anyX)                                                                        // 935
      gtlt = '';                                                                                     // 936
                                                                                                     // 937
    if (xM) {                                                                                        // 938
      if (gtlt === '>' || gtlt === '<') {                                                            // 939
        // nothing is allowed                                                                        // 940
        ret = '<0.0.0';                                                                              // 941
      } else {                                                                                       // 942
        // nothing is forbidden                                                                      // 943
        ret = '*';                                                                                   // 944
      }                                                                                              // 945
    } else if (gtlt && anyX) {                                                                       // 946
      // replace X with 0                                                                            // 947
      if (xm)                                                                                        // 948
        m = 0;                                                                                       // 949
      if (xp)                                                                                        // 950
        p = 0;                                                                                       // 951
                                                                                                     // 952
      if (gtlt === '>') {                                                                            // 953
        // >1 => >=2.0.0                                                                             // 954
        // >1.2 => >=1.3.0                                                                           // 955
        // >1.2.3 => >= 1.2.4                                                                        // 956
        gtlt = '>=';                                                                                 // 957
        if (xm) {                                                                                    // 958
          M = +M + 1;                                                                                // 959
          m = 0;                                                                                     // 960
          p = 0;                                                                                     // 961
        } else if (xp) {                                                                             // 962
          m = +m + 1;                                                                                // 963
          p = 0;                                                                                     // 964
        }                                                                                            // 965
      } else if (gtlt === '<=') {                                                                    // 966
        // <=0.7.x is actually <0.8.0, since any 0.7.x should                                        // 967
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.                                          // 968
        gtlt = '<'                                                                                   // 969
        if (xm)                                                                                      // 970
          M = +M + 1                                                                                 // 971
        else                                                                                         // 972
          m = +m + 1                                                                                 // 973
      }                                                                                              // 974
                                                                                                     // 975
      ret = gtlt + M + '.' + m + '.' + p;                                                            // 976
    } else if (xm) {                                                                                 // 977
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';                                                 // 978
    } else if (xp) {                                                                                 // 979
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';                                 // 980
    }                                                                                                // 981
                                                                                                     // 982
    debug('xRange return', ret);                                                                     // 983
                                                                                                     // 984
    return ret;                                                                                      // 985
  });                                                                                                // 986
}                                                                                                    // 987
                                                                                                     // 988
// Because * is AND-ed with everything else in the comparator,                                       // 989
// and '' means "any version", just remove the *s entirely.                                          // 990
function replaceStars(comp, loose) {                                                                 // 991
  debug('replaceStars', comp, loose);                                                                // 992
  // Looseness is ignored here.  star is always as loose as it gets!                                 // 993
  return comp.trim().replace(re[STAR], '');                                                          // 994
}                                                                                                    // 995
                                                                                                     // 996
// This function is passed to string.replace(re[HYPHENRANGE])                                        // 997
// M, m, patch, prerelease, build                                                                    // 998
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5                                                                    // 999
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do                                                   // 1000
// 1.2 - 3.4 => >=1.2.0 <3.5.0                                                                       // 1001
function hyphenReplace($0,                                                                           // 1002
                       from, fM, fm, fp, fpr, fb,                                                    // 1003
                       to, tM, tm, tp, tpr, tb) {                                                    // 1004
                                                                                                     // 1005
  if (isX(fM))                                                                                       // 1006
    from = '';                                                                                       // 1007
  else if (isX(fm))                                                                                  // 1008
    from = '>=' + fM + '.0.0';                                                                       // 1009
  else if (isX(fp))                                                                                  // 1010
    from = '>=' + fM + '.' + fm + '.0';                                                              // 1011
  else                                                                                               // 1012
    from = '>=' + from;                                                                              // 1013
                                                                                                     // 1014
  if (isX(tM))                                                                                       // 1015
    to = '';                                                                                         // 1016
  else if (isX(tm))                                                                                  // 1017
    to = '<' + (+tM + 1) + '.0.0';                                                                   // 1018
  else if (isX(tp))                                                                                  // 1019
    to = '<' + tM + '.' + (+tm + 1) + '.0';                                                          // 1020
  else if (tpr)                                                                                      // 1021
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;                                                // 1022
  else                                                                                               // 1023
    to = '<=' + to;                                                                                  // 1024
                                                                                                     // 1025
  return (from + ' ' + to).trim();                                                                   // 1026
}                                                                                                    // 1027
                                                                                                     // 1028
                                                                                                     // 1029
// if ANY of the sets match ALL of its comparators, then pass                                        // 1030
Range.prototype.test = function(version) {                                                           // 1031
  if (!version)                                                                                      // 1032
    return false;                                                                                    // 1033
                                                                                                     // 1034
  if (typeof version === 'string')                                                                   // 1035
    version = new SemVer(version, this.loose);                                                       // 1036
                                                                                                     // 1037
  for (var i = 0; i < this.set.length; i++) {                                                        // 1038
    if (testSet(this.set[i], version))                                                               // 1039
      return true;                                                                                   // 1040
  }                                                                                                  // 1041
  return false;                                                                                      // 1042
};                                                                                                   // 1043
                                                                                                     // 1044
function testSet(set, version) {                                                                     // 1045
  for (var i = 0; i < set.length; i++) {                                                             // 1046
    if (!set[i].test(version))                                                                       // 1047
      return false;                                                                                  // 1048
  }                                                                                                  // 1049
                                                                                                     // 1050
  if (version.prerelease.length) {                                                                   // 1051
    // Find the set of versions that are allowed to have prereleases                                 // 1052
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0                                      // 1053
    // That should allow `1.2.3-pr.2` to pass.                                                       // 1054
    // However, `1.2.4-alpha.notready` should NOT be allowed,                                        // 1055
    // even though it's within the range set by the comparators.                                     // 1056
    for (var i = 0; i < set.length; i++) {                                                           // 1057
      debug(set[i].semver);                                                                          // 1058
      if (set[i].semver === ANY)                                                                     // 1059
        continue;                                                                                    // 1060
                                                                                                     // 1061
      if (set[i].semver.prerelease.length > 0) {                                                     // 1062
        var allowed = set[i].semver;                                                                 // 1063
        if (allowed.major === version.major &&                                                       // 1064
            allowed.minor === version.minor &&                                                       // 1065
            allowed.patch === version.patch)                                                         // 1066
          return true;                                                                               // 1067
      }                                                                                              // 1068
    }                                                                                                // 1069
                                                                                                     // 1070
    // Version has a -pre, but it's not one of the ones we like.                                     // 1071
    return false;                                                                                    // 1072
  }                                                                                                  // 1073
                                                                                                     // 1074
  return true;                                                                                       // 1075
}                                                                                                    // 1076
                                                                                                     // 1077
exports.satisfies = satisfies;                                                                       // 1078
function satisfies(version, range, loose) {                                                          // 1079
  try {                                                                                              // 1080
    range = new Range(range, loose);                                                                 // 1081
  } catch (er) {                                                                                     // 1082
    return false;                                                                                    // 1083
  }                                                                                                  // 1084
  return range.test(version);                                                                        // 1085
}                                                                                                    // 1086
                                                                                                     // 1087
exports.maxSatisfying = maxSatisfying;                                                               // 1088
function maxSatisfying(versions, range, loose) {                                                     // 1089
  return versions.filter(function(version) {                                                         // 1090
    return satisfies(version, range, loose);                                                         // 1091
  }).sort(function(a, b) {                                                                           // 1092
    return rcompare(a, b, loose);                                                                    // 1093
  })[0] || null;                                                                                     // 1094
}                                                                                                    // 1095
                                                                                                     // 1096
exports.validRange = validRange;                                                                     // 1097
function validRange(range, loose) {                                                                  // 1098
  try {                                                                                              // 1099
    // Return '*' instead of '' so that truthiness works.                                            // 1100
    // This will throw if it's invalid anyway                                                        // 1101
    return new Range(range, loose).range || '*';                                                     // 1102
  } catch (er) {                                                                                     // 1103
    return null;                                                                                     // 1104
  }                                                                                                  // 1105
}                                                                                                    // 1106
                                                                                                     // 1107
// Determine if version is less than all the versions possible in the range                          // 1108
exports.ltr = ltr;                                                                                   // 1109
function ltr(version, range, loose) {                                                                // 1110
  return outside(version, range, '<', loose);                                                        // 1111
}                                                                                                    // 1112
                                                                                                     // 1113
// Determine if version is greater than all the versions possible in the range.                      // 1114
exports.gtr = gtr;                                                                                   // 1115
function gtr(version, range, loose) {                                                                // 1116
  return outside(version, range, '>', loose);                                                        // 1117
}                                                                                                    // 1118
                                                                                                     // 1119
exports.outside = outside;                                                                           // 1120
function outside(version, range, hilo, loose) {                                                      // 1121
  version = new SemVer(version, loose);                                                              // 1122
  range = new Range(range, loose);                                                                   // 1123
                                                                                                     // 1124
  var gtfn, ltefn, ltfn, comp, ecomp;                                                                // 1125
  switch (hilo) {                                                                                    // 1126
    case '>':                                                                                        // 1127
      gtfn = gt;                                                                                     // 1128
      ltefn = lte;                                                                                   // 1129
      ltfn = lt;                                                                                     // 1130
      comp = '>';                                                                                    // 1131
      ecomp = '>=';                                                                                  // 1132
      break;                                                                                         // 1133
    case '<':                                                                                        // 1134
      gtfn = lt;                                                                                     // 1135
      ltefn = gte;                                                                                   // 1136
      ltfn = gt;                                                                                     // 1137
      comp = '<';                                                                                    // 1138
      ecomp = '<=';                                                                                  // 1139
      break;                                                                                         // 1140
    default:                                                                                         // 1141
      throw new TypeError('Must provide a hilo val of "<" or ">"');                                  // 1142
  }                                                                                                  // 1143
                                                                                                     // 1144
  // If it satisifes the range it is not outside                                                     // 1145
  if (satisfies(version, range, loose)) {                                                            // 1146
    return false;                                                                                    // 1147
  }                                                                                                  // 1148
                                                                                                     // 1149
  // From now on, variable terms are as if we're in "gtr" mode.                                      // 1150
  // but note that everything is flipped for the "ltr" function.                                     // 1151
                                                                                                     // 1152
  for (var i = 0; i < range.set.length; ++i) {                                                       // 1153
    var comparators = range.set[i];                                                                  // 1154
                                                                                                     // 1155
    var high = null;                                                                                 // 1156
    var low = null;                                                                                  // 1157
                                                                                                     // 1158
    comparators.forEach(function(comparator) {                                                       // 1159
      if (comparator.semver === ANY) {                                                               // 1160
        comparator = new Comparator('>=0.0.0')                                                       // 1161
      }                                                                                              // 1162
      high = high || comparator;                                                                     // 1163
      low = low || comparator;                                                                       // 1164
      if (gtfn(comparator.semver, high.semver, loose)) {                                             // 1165
        high = comparator;                                                                           // 1166
      } else if (ltfn(comparator.semver, low.semver, loose)) {                                       // 1167
        low = comparator;                                                                            // 1168
      }                                                                                              // 1169
    });                                                                                              // 1170
                                                                                                     // 1171
    // If the edge version comparator has a operator then our version                                // 1172
    // isn't outside it                                                                              // 1173
    if (high.operator === comp || high.operator === ecomp) {                                         // 1174
      return false;                                                                                  // 1175
    }                                                                                                // 1176
                                                                                                     // 1177
    // If the lowest version comparator has an operator and our version                              // 1178
    // is less than it then it isn't higher than the range                                           // 1179
    if ((!low.operator || low.operator === comp) &&                                                  // 1180
        ltefn(version, low.semver)) {                                                                // 1181
      return false;                                                                                  // 1182
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {                                // 1183
      return false;                                                                                  // 1184
    }                                                                                                // 1185
  }                                                                                                  // 1186
  return true;                                                                                       // 1187
}                                                                                                    // 1188
                                                                                                     // 1189
///////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{"extensions":[".js",".json"]});
var exports = require("./node_modules/meteor/tmeasday:check-npm-versions/check-npm-versions.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['tmeasday:check-npm-versions'] = exports;

})();
