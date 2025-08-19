function Footer() {
  return (
    <>
      <footer class=" bg-primary-800 bg-[url(assets/bg-footer.png)] bg-center text-white p-4 mt-auto h-66 font-display">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
          <p className=" pr-10">
          Hecho en México.
          Universidad Nacional Autónoma de México (UNAM).<br></br><br></br> Todos los derechos reservados 2025.
          Esta página puede ser reproducida con fines no lucrativos, siempre y cuando se cite la fuente completa
          y su dirección electrónica, y no se mutile; de otra forma requiere permiso previo por escrito de la institución.
          </p>
          <p className="border-l border-white text-left pl-10">UNAM 2025</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
