function Footer(props) {
  return (
    <footer>
      {
        props.footer_data.map((v) => {
          return <h5> {v} </h5>
        })
      }
    </footer>
  )
}

export default Footer;