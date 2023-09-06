const content = (opts, c = 20) => {
  function produce(cb) {
    if(--c) setTimeout(produce, 10, cb);
    cb(null,opts.ohno);
  }
}

module.exports = content;