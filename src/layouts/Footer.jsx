const Footer = () => {
    return (
        <footer className="content-footer footer bg-footer-theme">
            <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
              <div className="mb-2 mb-md-0">
                © copyright_ 
                  {(new Date().getFullYear())}
                , Developed By Mystrix It
                
              </div>
            </div>
          </footer>
      );
}
export default Footer;