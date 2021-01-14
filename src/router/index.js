import Vue from 'vue'
import Router from 'vue-router'
import index from './../views/index'
import cart from "./../views/cart"




import my from "./../views/my"
import collection from "./../views/collection"

import detail from "./../views/detail"



import addressList from "./../views/addressList"
import addressEdit from "./../views/addressEdit"

import sort from "./../views/sort"

import order from "../views/order"
import allOrder from "../views/order/order-all"
import unCommentOrder from "../views/order/order-uncomment"
import unFinishOrder from "../views/order/order-unfinshed"
import comment from "../views/order/comment"


import login from "./../views/login/login"
import wxLogin from "./../views/login/wxLogin"
import iphoneLogin from "../views/login/iphoneLogin"


import admin from "./../views/admin/admin"
import adminLogin from "./../views/login/adminLogin"
import adminMy from "./../views/admin/adminMy"
import adminProcess from "./../views/admin/adminProcess"
import adminSubmit from "./../views/admin/submit"
import adminSubmitInformation from "./../views/admin/submitInmation"

import findContainer from "./../views/findContainer"


import field from "./../views/field/index"
import fieldForum from "./../views/field/forum"
import fieldForumDetail from "./../views/field/forumDetail"
import fieldMade from "./../views/field/made"
import fieldFavorites from "@/views/favorites/index";

Vue.use(Router)

//为了解决vue-router在3.0版本上重复点击导航报错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}



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
            path: '/admin/submit',
            name: 'adminSubmit',
            component: adminSubmit,
        },
        {
            path: '/admin/submit/information',
            name: 'adminSubmitInformation',
            component: adminSubmitInformation,
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
            path: '/my/collection',
            name: 'collection',
            component: collection
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
        },
        {
            path: '/addressList/addressEdit',
            name: 'addressEdit',
            component: addressEdit
        },
        {
            path: '/findContainer',
            name: 'findContainer',
            component: findContainer
        },
        {
            path: '/sort',
            name: 'sort',
            component: sort
        },

        {
            path: '/field',
            name: 'field',
            component: field
        },

        {
            path: '/field/forum',
            name: 'fieldForum',
            component: fieldForum
        },
        {
            path: '/field/forum/detail',
            name: 'fieldForumDetail',
            component: fieldForumDetail
        },
        {
            path: '/field/made',
            name: 'fieldMade',
            component: fieldMade
        },
        {
            path: '/field/favorites',
            name: 'fieldFavorites',
            component: fieldFavorites
        }


    ]
})
