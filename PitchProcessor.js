function concatFloat32Array(s, t = []) {
  const e = s.length;
  const r = new Float32Array(e + t.length);
  return r.set(s), r.set(t, e), r;
}
class PitchProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.samples = new Float32Array(0);
    this.port.onmessage = (s) => this.onmessage(s.data);
  }

  init() {
    // this.callback = callback
  }

  onmessage(event) {}

  process(inputs, outputs, parameters) {
    const e = inputs[0][0];
    const result = e[0];

    return (
      this.samples.length < 48e3
        ? (this.samples = concatFloat32Array(this.samples, e))
        : (this.port.postMessage({ type: "getData", result: this.samples }),
          (this.samples = new Float32Array(0))),
      !0
    );
  }
}
registerProcessor("PitchProcessor", PitchProcessor);
