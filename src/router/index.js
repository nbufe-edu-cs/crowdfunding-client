import Vue from 'vue'
import Router from 'vue-router'
import index from './../views/index'
import cart from  "./../views/cart"
import my from "./../views/my"
import detail from "./../views/detail"
import addressList from "./../views/addressList"

import order             from "../views/order"
import allOrder          from "../views/order/order-all"
import unCommentOrder    from "../views/order/order-uncomment"
import unFinishOrder     from "../views/order/order-unfinshed"
import comment           from "../views/order/comment"

import login from "./../views/login/login"

import wxLogin from "./../views/login/wxLogin"

import iphoneLogin from "../views/login/iphoneLogin"

import admin from "./../views/admin/admin"
import adminLogin from "./../views/login/adminLogin"
import adminMy from "./../views/admin/adminMy"
import adminProcess from "./../views/admin/adminProcess"




Vue.use(Router)

export default new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/wxLogin',
      name: 'wxLogin',
      component: wxLogin
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
    },
    {
      path: '/admin/adminProcess',
      name: 'adminProcess',
      component: adminProcess,
    },
    {
      path: '/admin/adminMy',
      name: 'adminMy',
      component: adminMy,
    },
    {
      path: '/admin/adminLogin',
      name: 'adminLogin',
      component: adminLogin
    },




    {
      path: '/iphoneLogin',
      name: 'iphoneLogin',
      component: iphoneLogin
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/order/all',
      name: 'allOrder',
      component: allOrder
    },
    {
      path: '/order/uncomment',
      name: 'unCommentOrder',
      component: unCommentOrder
    },
    {
      path: '/order/unfinshed',
      name: 'unFinishOrder',
      component: unFinishOrder
    },
    {
      path: '/order/comment',
      name: 'comment',
      component: comment
    },

    {
      path: '/addressList',
      name: 'addressList',
      component: addressList
    }
  ]
})
