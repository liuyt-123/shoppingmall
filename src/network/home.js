import {instance} from "./request"

export function getHomeData() {
    return instance({
        url: '/home/multidata'
    })
}

export function getHomeGoods(type,page){
    return instance({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}