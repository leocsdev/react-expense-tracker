function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <p className='text-center'>All rights reserved {year}.</p>
    </footer>
  )
}

export default Footer
