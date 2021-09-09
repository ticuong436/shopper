import { endpoint } from './config'

const CourseDetailApi = {
    list(slug) {
        return fetch(`${endpoint}/elearning/v4/course/${slug}`, {
            method: 'GET',
        }).then(res => res.json())
    }
}
export default CourseDetailApi