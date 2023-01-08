import './Navbar.css';

export default function Navbar({ logged_in }) {
  
  if (logged_in === true) {
    return (
      <nav>
    <div className="nav-left">
      <h1 className="nav-left__brand">
        NJ<span>ROTC</span>
      </h1>
      <div className="nav-left__links">
        <a
          href="#"
          rel="noopener noreferrer"
          className="nav-link"
          aria-label="Issues Link"
          title="View and create issues to highlight to the Battalion."
        >
          Issues
        </a>
        <a
          href="#"
          rel="noopener noreferrer"
          className="nav-link"
          aria-label="Promotions Link"
          title="View, manage, and edit your promotion requests."
        >
          Promotions
        </a>
        <a
          href="#"
          rel="noopener noreferrer"
          className="nav-link"
          aria-label="Events Link"
          title="View upcoming SKHS NJROTC events."
        >
          Events
        </a>
        <a
          href="https://skhs.skschools.org/njrotc"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
          aria-label="Events Link"
          title="Visit the official SKHS NJROTC website."
        >
          {" "}
          Website
        </a>
        <a
          href="#"
          rel="noopener noreferrer"
          className="nav-button"
          aria-label="Create a new issue, promotion request, or event."
          title="Create an issue, event, or promotion request."
        >
          Create
        </a>
      </div>
    </div>
    <div className="nav-right">
      <input
        type="checkbox"
        className="nav-right__app__drawer"
        title="Open overflow menu of SKHS NJROTC apps and links."
      />
      {/* 	Apps overflow container */}
      <div id="apps-container" className="apps-container">
        <span
          className="app"
          id="skhs-website"
          onclick='window.open("https://skschools.org", "_blank");
  '
        >
          <img
            src="https://cdn.glitch.global/71169d24-ee9f-4b76-bb3a-44aedb03f000/SK%20Logo%20Cropped.png?v=1668372169859"
            alt="SKHS Logo"
            className="app__image"
          />
          <a href="" className="app__link">
            SKHS Website
          </a>
        </span>
        <span
          className="app"
          id="resources-folder"
          onclick='window.open("https://drive.google.com/drive/u/0/folders/1LPSmTAqSQY8Cjq2ilDv2olmOBBd9GP-j", "_blank");
  '
        >
          <img
            src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png"
            alt="SKHS Logo"
            className="app__image"
          />
          <a href="" className="app__link">
            Resources Folder
          </a>
        </span>
        <span
          className="app"
          id="knowledge-flashcards"
          onclick='window.open("https://quizlet.com/750891478/njrotc-knowledge-reviews-flash-cards/", "_blank")'
        >
          <img
            src="https://cdn.glitch.global/71169d24-ee9f-4b76-bb3a-44aedb03f000/image-removebg-preview.png?v=1673123779149"
            alt="SKHS Logo"
            style={{ width: "90%" }}
            className="app__image"
          />
          <a href="" className="app__link">
            Knowledge Flashcards
          </a>
        </span>
        <span
          onclick='window.open("https://njrotc.aestriex.com", "_blank")'
          className="app"
          id="legacy-website"
        >
          <img
            src="https://cdn.glitch.global/71169d24-ee9f-4b76-bb3a-44aedb03f000/sk-modified.png?v=1673124147919"
            alt="SKHS Logo"
            className="app__image"
          />
          <a href="" className="app__link">
            Legacy Website
          </a>
        </span>
      </div>
      <div className="nav-right__profile">
        <img
          src="https://lh3.googleusercontent.com/ogw/AOh-ky3Dob5LHRfy90tgvYbACXKLIwqItmDCmOtY9YLDsA=s32-c-mo"
          alt="Profile picture"
        />
      </div>
    </div>
  </nav>
    )
  } else {
    return (
      <nav>
    <div className="nav-left">
      <h1 className="nav-left__brand">
        NJ<span>ROTC</span>
      </h1>
    </div>
    <div className="nav-right">
    <a
          href="#"
          rel="noopener noreferrer"
          className="nav-button"
          aria-label="Sign in or sign up for your CDMS v2 account."
          title="Sign in or sign up for your CDMS v2 account.">
          Sign in
        </a>
    </div>
  </nav>
    )
  }
}
