export default () => {
  return {
    id: 1,
    title: '图片',
    name: 'Image',
    type: 1,
    anim: {
      type: 1,
      duration: 1,
      delay: 0.4
    },
    props: {
      src: './static/images/logo.png'
    },
    css: {
      t: 0,
      l: 0,
      w: 200,
      h: 200,
      bd: {
        w: 1,
        t: 1,
        c: '#fff'
      },
      br: 5,
      rotate: 0,
      bgc: '#fff'
    }
  }
}
