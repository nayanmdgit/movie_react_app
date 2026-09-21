

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    <h3 className="text-3xl font-extrabold bg-linear-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
        Movie Explorer
    </h3>
    
    <p>Copyright © {new Date().getFullYear()}- All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-6 md:place-self-center md:justify-self-end">
    <a
    href="https://www.facebook.com/nayan.sheikh.142"
        target="_blank"
        rel="noopener noreferrer"
    >
      <svg
        aria-label="Facebook"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>

    <a
    href="https://github.com/nayanmdgit"
    target="_blank"
    rel="noopener noreferrer"
>
    <svg
        aria-label="GitHub"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current"
    >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3.005-.405c1.02.005 2.045.138 3.005.405 2.28-1.552 3.285-1.23 3.285-1.23.65 1.653.245 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.215 0 1.6-.015 2.89-.015 3.285 0 .315.21.69.825.575C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
</a>
    <a
    href="https://www.youtube.com/@BinaryBiteBd"
    target="_blank"
    rel="noopener noreferrer"
    
    >
      <svg
        aria-label="YouTube"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    
  </nav>
</footer>
    );
};

export default Footer;