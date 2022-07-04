export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map( item => ({ 
    params: { id: item.id.toString() }
   }))

  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await res.json()

  return { props: { item: data } }
}

const Details = ({ item }) => {
  return ( 
    <div>
      <h1>{ item.name }</h1>
      <p>{ item.email }</p>
      <p>{ item.website }</p>
      <p>{ item.address.city }</p>
    </div>
   );
}
 
export default Details;