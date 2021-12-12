function Header() {
  const style = {
    fontSize: '1.75rem',
  }

  return (
    <header>
      <h1 className='text-center my-4' style={style}>
        Expense Tracker
      </h1>
    </header>
  )
}

export default Header
