// Import module.
const AudioRecorder = require("node-audiorecorder");

// Options is an optional parameter for the constructor call.
// If an option is not given the default value, as seen below, will be used.
const options = {
  program: "rec", // Which program to use, either `arecord`, `rec`, or `sox`.
  device: null, // Recording device to use, e.g. `hw:1,0`

  bits: 16, // Sample size. (only for `rec` and `sox`)
  channels: 1, // Channel count.
  encoding: "signed-integer", // Encoding type. (only for `rec` and `sox`)
  format: "S16_LE", // Encoding type. (only for `arecord`)
  rate: 8000, // Sample rate.
  type: "wav", // Format type.

  // Following options only available when using `rec` or `sox`.
  silence: 2, // Duration of silence in seconds before it stops recording.
  thresholdStart: 0.5, // Silence threshold to start recording.
  thresholdStop: 0.5, // Silence threshold to stop recording.
  keepSilence: true, // Keep the silence in the recording.
};
// Optional parameter intended for debugging.
// The object has to implement a log and warn function.
const logger = console;

// Create an instance.
const audioRecorder = new AudioRecorder(options, logger);
