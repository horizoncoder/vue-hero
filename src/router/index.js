import VueRouter from 'vue-router'
import HeroList from '@/components/HeroList'
import ShowHero from '@/components/ShowHero'
import AddHero from '@/components/AddHero'
import EditHero from '@/components/EditHero'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HeroList',
      component: HeroList
    },
    {
      path: '/show-hero/:id',
      name: 'ShowHero',
      component: ShowHero
    },
    {
      path: '/add-hero',
      name: 'AddHero',
      component: AddHero
    },
    {
      path: '/edit-hero/:id',
      name: 'EditHero',
      component: EditHero
    }
  ]
})
