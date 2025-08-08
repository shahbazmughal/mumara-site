import image from '../../assets/placeholder.jpg'

const placeholderImage = {
  isPlaceholder: true,
  objectfit: 'none',
  medium: {
    src: image,
    maxWidth: 600,
    aspectRatio: 1,
    sizes: '',
    srcSet: ''
  },
  large: {
    fontSize:`6rem`,
    lineHeight:1
  }
}

export default {
  text: [
    { text: 'NOT FOUND', variant: 'h4' },
    { text: '404', variant: 'h1' },
    { text: 'Page not found.', variant: 'medium' },
    { text: 'The page you were looking for doesn`t exist.', variant: 'small' }
  ],
  images: [
    {
      src: placeholderImage
    }
  ],
  buttons: [
    {
      text: 'Go to Home',
      type: "PAGE",
      link: '/'
    }
  ]
}
