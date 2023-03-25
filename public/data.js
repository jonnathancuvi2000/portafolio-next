import propertyImg from '../public/assets/projects/property.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import cryptoImg from '../public/assets/projects/crypto.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
// new
import ecommerceWeb from '../public/assets/projects/eccomerceweb.png'
import blog from '../public/assets/projects/blog.png'
import rse from '../public/assets/projects/rsedash.png'
import gestoremploy from '../public/assets/projects/gestoremloy.png'
import adminecomerce from '../public/assets/projects/admineccomerce.png'
import shop from '../public/assets/projects/shop.png'
import f_ecom from '../public/assets/projects/flutter_ecommerce/f_ecom_2.jpg'
import flutter_gt from '../public/assets/projects/flutter_gestortareas/flutter_gt_1.jpg'
import rn_shop from '../public/assets/projects/rn_shop/rn_shop_1.jpg'


export const data = [
  {
    id: '1',
    title: "Ecommerce Web",
    projectType: "Aplicación Web/Tienda de Ropa",
    image: ecommerceWeb,
    projectUrl: '/Property',
    feachurePage: {
      porperties: ['React', 'Node'],
      description: 'Página Web para realizar compras de prendas de vestir online, permite a los usuarios comprar todo tipo de ropa y realizar sus pagos de forma rápida y sencilla por medio de PayPal y PayPhone.',
      tecnologies: ['React', 'Node', 'MondoDB', 'Bootstrap', 'PayPhone', 'PayPal'],
      demo: 'https://effervescent-treacle-8011f0.netlify.app',
      code: 'https://github.com/jonnathancuvi2000/ecommercer-client-react.git',
      image: ecommerceWeb,
      img: 'eccomerceweb.png'
    }
  },
  {
    id: '2',
    title: "Evaluación RSE",
    projectType: "Aplicación Web",
    image: rse,
    projectUrl: '/Property',
    feachurePage: {
      porperties: ['Angular', 'Spring Boot'],
      description: 'Sistema Web de evaluación de prácticas de Responsabilidad Social Empresarial (RSE). Por medio de este sistema los usuarios pueden conocer el estado de su organización respecto a aspectos de RSE utilizando reportes y dashboard.',
      tecnologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'D3.js', 'Chart.js'],
      demo: '',
      code: 'https://github.com/jonnathan2019',
      image: rse,
      img: 'rsedash.png',
      galery: [
        'rse_web/rse_1.png',
        'rse_web/rse_2.png',
        'rse_web/rse_3.png',
        'rse_web/rse_4.png',
        'rse_web/rse_5.png',
        'rse_web/rse_6.png',
        'rse_web/rse_8.png',
        'rse_web/rse_9.png',
        'rse_web/rse_10.png',
        'rse_web/rse_11.png',
      ],
    }
  },
  {
    id: '3',
    title: "Blog",
    projectType: "Aplicación Web",
    image: blog,
    projectUrl: '/Property',
    feachurePage: {
      porperties: ['Vue.js', 'Firebase'],
      description: 'Página Web para la creación de blogs.',
      tecnologies: ['Vue.js', 'Firebase'],
      demo: 'https://statuesque-kleicha-c985bb.netlify.app/',
      code: 'https://github.com/jonnathancuvi2000/vue-firebase-blog.git',
      image: blog,
      img: 'blog.png'

    }
  },
  {
    id: '4',
    title: "Gestor de Empleados",
    projectType: "Aplicación Web",
    image: gestoremploy,
    projectUrl: '/Property',
    feachurePage: {
      porperties: ['Vue.js', 'Laravel'],
      description: 'Sistema Web para gestionar información del personal de una organización, mediante este sistema puedes cambiar roles, editar perfiles de forma rápida y sencilla.',
      tecnologies: ['Vue.js', 'Laravel', 'MySQL'],
      demo: 'http://18.215.165.78/',
      code: 'https://github.com/jonnathancuvi2000/employeesLaravelVuejs.git',
      image: gestoremploy,
      img: 'gestoremloy.png'
    }
  },
  {
    id: '5',
    title: "DashBoard/Ecommerce Web",
    projectType: "Aplicación Web",
    image: adminecomerce,
    projectUrl: '/Property',
    feachurePage: {
      porperties: ['React', 'Node'],
      description: 'Sistema Web o panel admin dashboard, permite a los usuarios con respectivas credenciales gestionar la información de los diferentes productos y usuarios de una tienda online.',
      tecnologies: ['React', 'Node', 'MondoDB', 'Bootstrap', 'D3.js', 'Chart.js'],
      demo: 'https://sweet-ganache-f63f94.netlify.app/',
      code: 'https://github.com/jonnathancuvi2000/ecommerce-admin-react.git',
      image: adminecomerce,
      img: 'admineccomerce.png'
    }
  },
  {
    id: '6',
    title: "Store Web",
    projectType: "Aplicación Web",
    image: shop,
    projectUrl: '/Property',
    feachurePage: {
      porperties: ['React', 'Node'],
      description: 'Sistema Web para comprar productos online, permitiendo realizar pagos a través de Stripe.',
      tecnologies: ['React', 'Node', 'MondoDB', 'Bootstrap', 'PayPhone', 'Stripe'],
      demo: 'https://wonderful-faun-b66806.netlify.app/',
      code: 'https://github.com/jonnathancuvi2000/shop-backend-node.git',
      image: shop,
      img: 'shop.png'
    }
  },
  {
    id: '7',
    title: "Ecommerce App",
    projectType: "Aplicación Mobile",
    image: f_ecom,
    projectUrl: '/Property',
    feachurePage: {
      porperties: ['Flutter', 'Firebase'],
      description: 'Aplicación mobile desarrollada en Flutter para conocer los productos que ofrece determina tienda.',
      tecnologies: ['Flutter', 'Firebase', 'Dart', 'Stripe'],
      demo: '',
      code: 'https://github.com/jonnathancuvi2000/shop-backend-node.git',
      image: f_ecom,
      img: 'flutter_ecommerce/f_ecom_2.jpg',
      galery: [
        'flutter_ecommerce/f_ecom_1.jpg',
        'flutter_ecommerce/f_ecom_2.jpg',
        'flutter_ecommerce/f_ecom_3.jpg',
        'flutter_ecommerce/f_ecom_4.jpg',
        'flutter_ecommerce/f_ecom_5.jpg',
      ],
    }
  },
  {
    id: '8',
    title: "Gestor de Tareas",
    projectType: "Aplicación Mobile",
    image: flutter_gt,
    projectUrl: '/Property',
    feachurePage: {
      porperties: ['Flutter','Dart'],
      description: 'Aplicación Móvil la cual permite gestionar las tareas a realizar por un determinado usuario',
      tecnologies: ['Flutter', 'Dart'],
      demo: '',
      code: 'https://github.com/jonnathancuvi2000/shop-backend-node.git',
      image: flutter_gt,
      img: 'flutter_gestortareas/flutter_gt_1.jpg',
      galery: [
        'flutter_gestortareas/flutter_gt_1.jpg',
        'flutter_gestortareas/flutter_gt_2.jpg',
      ],
    }
  },
  {
    id: '9',
    title: "Shop",
    projectType: "Aplicación Mobile",
    image: rn_shop,
    projectUrl: '/Property',
    feachurePage: {
      porperties: ['React Native','Go'],
      description: 'Aplicación mobile desarrollada en React Native para conocer los productos que ofrece determina tienda.',
      tecnologies: ['React Native','Go'],
      demo: '',
      code: 'https://github.com/jonnathancuvi2000/shop-backend-node.git',
      image: rn_shop,
      img: 'rn_shop/rn_shop_1.jpg',
      galery: [
        'rn_shop/rn_shop_1.jpg',
        'rn_shop/rn_shop_2.jpg',
        'rn_shop/rn_shop_3.jpg',
      ],
    }
  },
]

export const datos = [
  {
    id: '1',
    title: "Ecommerce Web",
    projectType: "Aplicación Web/Tienda de Ropa",
    image: ecommerceWeb,
    projectUrl: '/Property',
    feachurePage: {
      porperties: ['React', 'Node'],
      description: 'This a a proyect that aloows the users to buy products, shcus us, pants, shoes, and any kinf of clouse, with this page you can page online or pay when you get the product in your house.',
      tecnologies: ['React', 'Node', 'MondoDB', 'Bootstrap', 'PayPhone', 'PayPal'],
      demo: 'https://effervescent-treacle-8011f0.netlify.app',
      code: 'https://github.com/jonnathancuvi2000/ecommercer-client-react.git',
      image: ecommerceWeb,
      img: 'eccomerceweb.png'
    }
  },
  {
    id: '2',
    title: "Evaluación RSE",
    projectType: "Aplicación Web",
    image: rse,
    projectUrl: '/Property',
    feachurePage: {
      porperties: ['Angular', 'Spring Boot'],
      description: 'This a a proyect that aloows the users to buy products, shcus us, pants, shoes, and any kinf of clouse, with this page you can page online or pay when you get the product in your house.',
      tecnologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'D3.js', 'Chart.js'],
      demo: '',
      code: 'https://github.com/jonnathan2019',
      image: rse,
      img: 'rsedash.png'
    }
  },
  {
    id: '3',
    title: "Blog",
    projectType: "Aplicación Web",
    image: blog,
    projectUrl: '/Property',
    feachurePage: {
      porperties: ['Vue.js', 'Firebase'],
      description: 'This a a proyect that aloows the users to buy products, shcus us, pants, shoes, and any kinf of clouse, with this page you can page online or pay when you get the product in your house.',
      tecnologies: ['Vue.js', 'Firebase'],
      demo: 'https://statuesque-kleicha-c985bb.netlify.app/',
      code: 'https://github.com/jonnathancuvi2000/vue-firebase-blog.git',
      image: blog,
      img: 'blog.png'

    }
  },
  {
    id: '4',
    title: "Gestor de Empleados",
    projectType: "Aplicación Web",
    image: gestoremploy,
    projectUrl: '/Property',
    feachurePage: {
      porperties: ['React', 'Node'],
      description: 'This a a proyect that aloows the users to buy products, shcus us, pants, shoes, and any kinf of clouse, with this page you can page online or pay when you get the product in your house.',
      tecnologies: ['React', 'Node', 'MondoDB', 'Bootstrap', 'D3.js', 'Chart.js'],
      demo: 'http://18.215.165.78/',
      code: 'https://github.com/jonnathancuvi2000/employeesLaravelVuejs.git',
      image: gestoremploy,
      img: 'gestoremloy.png'
    }
  },
  {
    id: '5',
    title: "DashBoard/Ecommerce Web",
    projectType: "Aplicación Web",
    image: adminecomerce,
    projectUrl: '/Property',
    feachurePage: {
      porperties: ['Vue.js', 'Laravel'],
      description: 'This a a proyect that aloows the users to buy products, shcus us, pants, shoes, and any kinf of clouse, with this page you can page online or pay when you get the product in your house.',
      tecnologies: ['Vue.js', 'Laravel', 'MySQL', 'D3.js', 'Chart.js'],
      demo: 'https://sweet-ganache-f63f94.netlify.app/',
      code: 'https://github.com/jonnathancuvi2000/ecommerce-admin-react.git',
      image: adminecomerce,
      img: 'admineccomerce.png'
    }
  },
  {
    id: '6',
    title: "Store Web",
    projectType: "Aplicación Web",
    image: shop,
    projectUrl: '/Property',
    feachurePage: {
      porperties: ['React', 'Node'],
      description: 'This a a proyect that aloows the users to buy products, shcus us, pants, shoes, and any kinf of clouse, with this page you can page online or pay when you get the product in your house.',
      tecnologies: ['React', 'Node', 'MondoDB', 'Bootstrap', 'PayPhone', 'Stripe'],
      demo: 'https://wonderful-faun-b66806.netlify.app/',
      code: 'https://github.com/jonnathancuvi2000/shop-backend-node.git',
      image: shop,
      img: 'shop.png'
    }
  },
]