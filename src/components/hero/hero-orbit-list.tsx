import { Fragment } from 'react'
import HeroOrbit from './hero-orbit'
import StarIcon from './star-icon'

export default function HeroOrbitList() {
  return (
    <Fragment>
      <HeroOrbit size={800} rotation={45}>
        <StarIcon className="size-28 text-blue-300" />
      </HeroOrbit>

      <HeroOrbit size={550} rotation={0}>
        <StarIcon className="size-12 text-blue-300" />
      </HeroOrbit>

      <HeroOrbit size={590} rotation={90}>
        <StarIcon className="size-8 text-blue-300" />
      </HeroOrbit>

      <HeroOrbit size={430} rotation={-15}>
        <StarIcon className="size-8 text-blue-300/20" />
      </HeroOrbit>

      <HeroOrbit size={440} rotation={90}>
        <StarIcon className="size-5 text-blue-300/20" />
      </HeroOrbit>

      <HeroOrbit size={530} rotation={180}>
        <StarIcon className="size-10 text-blue-300/20" />
      </HeroOrbit>

      <HeroOrbit size={710} rotation={140}>
        <StarIcon className="size-14 text-blue-300/20" />
      </HeroOrbit>

      <HeroOrbit size={720} rotation={90}>
        <div className="size-3 rounded-full bg-blue-300/20" />
      </HeroOrbit>

      <HeroOrbit size={520} rotation={-40}>
        <div className="size-3 rounded-full bg-blue-300/20" />
      </HeroOrbit>

      <HeroOrbit size={650} rotation={-5}>
        <div className="size-3 rounded-full bg-blue-300/20" />
      </HeroOrbit>
    </Fragment>
  )
}
