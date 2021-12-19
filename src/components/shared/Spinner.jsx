import spinner from '../assets/spinner.gif'

function Spinner() {
  return (
    <img
      src={spinner}
      alt='Loading'
      style={{ width: '50px', margin: '1rem auto', display: 'block' }}
    />
  )
}

export default Spinner
