import { detail } from 'data/detail'

export function getDetailById (id) {
    return detail[id] || {}
}
