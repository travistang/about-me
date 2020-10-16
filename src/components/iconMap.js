import {
  faAt,
  faSun,
  faMoon,
  faBars,
  faTimes,
  faArrowDown,
  faDownload,
  faMapPin,
  faHome,
  faDumbbell,
  faMountain,
  faMusic,
  faBicycle,
  faCopyright,
  faBomb,
} from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faInternetExplorer,
  faLinkedin,
  faReact,
  faRaspberryPi,
  faNodeJs,
  faAws,
  faDocker,
  faPython,
  faNode,
} from "@fortawesome/free-brands-svg-icons"
import graphql from "@iconify/icons-cib/graphql"
import pytorch from "@iconify/icons-logos/pytorch"
import react from "@iconify/icons-cib/react"
import redux from "@iconify/icons-cib/redux"
import reduxSaga from "@iconify/icons-logos/redux-saga"
import gatsby from "@iconify/icons-cib/gatsby"
import python from "@iconify/icons-cib/python"
import aws from "@iconify/icons-cib/amazon-aws"
import mongodb from "@iconify/icons-cib/mongodb"
import express from "@iconify/icons-logos/express"
import keras from "@iconify/icons-cib/keras"
import vue from "@iconify/icons-cib/vue-js"
import tensorflow from "@iconify/icons-cib/tensorflow"
import openaigym from "@iconify/icons-simple-icons/openaigym"
import nodejs from "@iconify/icons-simple-icons/node-dot-js"
import cordova from "@iconify/icons-file-icons/cordova"
import opencv from "@iconify/icons-file-icons/opencv"
import flask from "@iconify/icons-file-icons/flask"
import cpp from "@iconify/icons-file-icons/c"
import swift from "@iconify/icons-cib/swift"
import firebase from "@iconify/icons-cib/firebase"
import typescript from "@iconify/icons-cib/typescript"
import webrtc from "@iconify/icons-simple-icons/webrtc"
import raspbyerrypi from "@iconify/icons-cib/raspberry-pi"

export default {
  github: faGithub,
  website: faInternetExplorer,
  at: faAt,
  sun: faSun,
  moon: faMoon,
  linkedin: faLinkedin,
  home: faHome,
  location: faMapPin,

  burgerOpen: faBars,
  burgerClose: faTimes,

  download: faDownload,
  moreBelow: faArrowDown,

  // CV tailor options
  frontend: faReact,
  backend: faNodeJs,
  iot: faRaspberryPi,

  // hobbies
  hiking: faMountain,
  piano: faMusic,
  cycling: faBicycle,
  gym: faDumbbell,

  aws: faAws,
  docker: faDocker,
  react: faReact,
  python: faPython,
  node: faNode,
  copyright: faCopyright,

  // 404
  notFound: faBomb,
}

export const IconifyIcons = {
  graphql,
  pytorch,
  react,
  redux,
  "redux-saga": reduxSaga,
  python,
  aws,
  gatsby,
  mongodb,
  keras,
  tensorflow,
  vue,
  opencv,
  flask,
  swift,
  nodejs,
  firebase,
  cordova,
  cpp,
  webrtc,
  typescript,
  "raspberry pi": raspbyerrypi,
  "openai gym": openaigym,
}
