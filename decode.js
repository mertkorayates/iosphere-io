function Decode(fPort, bytes) {
  var decoded = {};

  if (bytes.length >= 2) {
    decoded.pb3_status = bytes[0] === 0x01 ? "ON" : "OFF";
    decoded.pb4_status = bytes[1] === 0x01 ? "ON" : "OFF";
  } else {
    decoded.error = "Invalid payload length";
  }

  return decoded;
}
