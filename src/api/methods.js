import request from './request'

export function GET(url, params) {
    return request({
        url: url,
        method: 'get',
        params: params
    })
}

export function POST_QUERY(url, params) {
    return request({
        url: url,
        method: 'post',
        params: params
    })
}

export function POST(url, data) {
    return request({
        url: url,
        method: 'post',
        data: data
    })
}

export function PUT(url, data) {
    return request({
        url: url,
        method: 'put',
        data: data
    })
}

export function DELETE(url, params) {
    return request({
        url: url,
        method: 'delete',
        params: params
    })
}