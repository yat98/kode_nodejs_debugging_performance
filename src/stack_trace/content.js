const content = (opts, c = 20) => {
  return --c ? content(opts, c) : opts.ohno;
}

export default content;