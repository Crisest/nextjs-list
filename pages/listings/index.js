import Styles from '../../styles/Listings.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();

  return {
    props: { listings: data }
  }
} // runs at buildtime

const Listings = ({ listings }) => {
  return (
    <>
      <h1>Listings</h1>
      { listings.map(listing => (
        <Link key={listing.id} href={`/listings/${listing.id}`}>
          <a className={Styles.single}>
            <h3>{ listing.name } </h3>
          </a>
        </Link>
        ))
      }
    </>
  )
}

export default Listings