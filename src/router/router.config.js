import Copy from '../components/copy.vue'
import HelloWorld from '../components/HelloWorld.vue'

export default{

    mode: 'history',
    routes: [
        {
            path: '/copy',
            component: Copy
        },
        {
            path: '/hello',
            component: HelloWorld
        }
    ]
}