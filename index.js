const requests = require('request');
const { Readable } = require('stream');
var Speech = require('speak-tts')
const tone = require('tone')
// global.window.request = requests
// global.window.Readable = Readable
window.ss = Speech
window.tone = tone
// global.window.say = say

